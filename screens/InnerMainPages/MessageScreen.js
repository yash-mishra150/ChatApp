import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import ProfilePhoto from '../../component/ProfilePhoto';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import io from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const MessageScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params; // Extract email from navigation params
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  const socket = io('http://your-server-url'); // Replace with your server URL

  useEffect(() => {
    const loadMessages = async () => {
      try {
        // Load messages from AsyncStorage
        const storedMessages = await AsyncStorage.getItem(`messages_${email}`);
        if (storedMessages) {
          setMessages(JSON.parse(storedMessages));
        }
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
    };

    loadMessages();

    socket.on('connect', () => {
      console.log('Connected to socket server');
      
      // Request messages when connected
      socket.emit('fetchMessages', { email });
    });

    socket.on('messagesFetched', (fetchedMessages) => {
      setMessages(fetchedMessages);
      saveMessages(fetchedMessages); // Save fetched messages to AsyncStorage
    });

    socket.on('messageReceived', (message) => {
      const updatedMessages = [...messages, message];
      setMessages(updatedMessages);
      saveMessages(updatedMessages); // Save new message to AsyncStorage
    });

    socket.on('fetchMessagesError', (error) => {
      console.error('Error fetching messages:', error);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const saveMessages = async (messages) => {
    try {
      // Save messages to AsyncStorage
      await AsyncStorage.setItem(`messages_${email}`, JSON.stringify(messages));
    } catch (error) {
      console.error('Failed to save messages:', error);
    }
  };

  const handleSendMessage = async () => {
    if (messageText.trim()) {
      const newMessage = {
        _id: `${Date.now()}`,
        text: messageText,
        userEmail: email,
        createdAt: Date.now(),
      };

      // Emit the new message to the socket server
      socket.emit('messageSent', newMessage);
      
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      saveMessages(updatedMessages); // Save new message to AsyncStorage
      setMessageText('');
    }
  };

  const renderDateSeparator = (current, previous) => {
    const currentDate = dayjs(current);
    const previousDate = dayjs(previous);
    
    if (!previous || !currentDate.isSame(previousDate, 'day')) {
      return (
        <Text className="my-2 text-center text-gray-500">
          {currentDate.format('MMMM D, YYYY')}
        </Text>
      );
    }
    return null;
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View className="items-center flex-1 bg-neutral-900" style={{ paddingTop: height * 0.06 }}>
        <View className='flex-row items-center justify-around w-full'>
          <TouchableOpacity onPress={() => navigation.navigate('ChatHome')}>
            <Icon name="chevron-left" size={25} color="#fff" />
          </TouchableOpacity>
          <View><ProfilePhoto name='Yash' /></View>
          <View className="flex-col items-start -ml-8">
            <Text style={{ fontFamily: 'Poppins-SemiBold' }} className="text-xl text-white">
              Yash Mishra
            </Text>
            <Text style={{ fontFamily: 'Poppins-Regular' }} className="text-neutral-400">
              Active Now
            </Text>
          </View>
          <TouchableOpacity><Icon name="phone-alt" size={25} color="#fff" /></TouchableOpacity>
          <TouchableOpacity><Icon name="video" size={25} color="#fff" /></TouchableOpacity>
        </View>
        
        <ScrollView className='flex-1 w-full px-4 py-2 mt-3'>
          {messages.map((message, index) => (
            <React.Fragment key={message._id}>
              {renderDateSeparator(message.createdAt, index > 0 ? messages[index - 1].createdAt : null)}
              <View className={`mb-2 flex-row ${message.userEmail === email ? 'justify-end' : 'justify-start'}`}>
                {message.userEmail !== email && <ProfilePhoto name='User' />}
                <View className={` p-3 rounded-lg ${message.userEmail === email ? 'bg-blue-100 mr-2' : 'bg-gray-200 ml-2'}`}>
                  <Text style={{fontFamily: 'Poppins-Regular'}} className="text-base">{message.text}</Text>
                  <Text style={{fontFamily: 'Poppins-Regular'}} className="self-end mt-1 text-xs text-gray-500">{dayjs(message.createdAt).format('hh:mm A')}</Text>
                </View>
                {message.userEmail === email && <ProfilePhoto className='ml-2' name='Yash' />}
              </View>
            </React.Fragment>
          ))}
        </ScrollView>

        <View className='flex-row items-center justify-around w-full px-1 py-4 bg-neutral-900'>
          <TouchableOpacity><Icon name="link" size={25} color="#fff" /></TouchableOpacity>
          <TextInput
            style={{ width: width * 0.6, height: height * 0.05, fontFamily: 'Poppins-Regular' }}
            placeholder='Write your message'
            className='px-3 pt-1 bg-white rounded-xl'
            value={messageText}
            onChangeText={setMessageText}
          />
          <TouchableOpacity onPress={handleSendMessage}><Icon name="paper-plane" size={25} color="#fff" /></TouchableOpacity>
          <TouchableOpacity><Icon name="camera" size={25} color="#fff" /></TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MessageScreen;
