import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import ProfilePhoto from '../../component/ProfilePhoto';
import Cast from '../../component/Cast';
import { styled } from 'nativewind';
import MessagesShow from '../../component/MessagesShow';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

const SearchIcon = () => {
  return (
    <Svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="25" cy="25" r="25" fill="white" opacity="0.2" />
      <Path d="M30.958 30.958l3.208 3.208M33.25 22.5417c0-4.8095-3.8988-8.7083-8.7083-8.7083s-8.7083 3.8988-8.7083 8.7083c0 4.8095 3.8988 8.7083 8.7083 8.7083 4.8095 0 8.7083-3.8988 8.7083-8.7083z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

const ChatHomePage = () => {
  const navigation = useNavigation();
  const [recents, setRecents] = useState([1, 2, 3, 4, 5]);
  const [messages, setMessages] = useState([
    { name: 'Yash Mishra', message: 'How are you today?', time: '2 min ago', unreadCount: 3 },
    { name: 'Yash Mishra', message: 'How are you today?', time: '2 min ago', unreadCount: 3 },
    { name: 'Yash Mishra', message: 'How are you today?', time: '2 min ago', unreadCount: 3 },
    { name: 'Yash Mishra', message: 'How are you today?', time: '2 min ago', unreadCount: 3 },
    { name: 'Yash Mishra', message: 'How are you today?', time: '2 min ago', unreadCount: 3 },
    { name: 'Yash Mishra', message: 'How are you today?', time: '2 min ago', unreadCount: 3 },
    // Add more message objects here
  ]);

  return (
    <View className="items-center flex-1 bg-neutral-900" style={{ paddingTop: height * 0.05 }}>
      <View className="flex-row items-center justify-around w-full ">
        <TouchableOpacity style={styles.iconContainer}>
          <SearchIcon />
        </TouchableOpacity>
        <Text className="text-xl text-white" style={{ fontFamily: 'Poppins-Regular' }}>Home</Text>
        <TouchableOpacity>
          <ProfilePhoto name="yash" />
        </TouchableOpacity>
      </View>
      <View className='w-full'>
        <View style={{ marginLeft: width * 0.04 }}>
          <Cast navigation={navigation} cast={recents} />
        </View>
        <View className="flex w-full">
          <MessagesShow navigation={navigation} messages={messages} />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: null, // Equivalent to Tailwind CSS slate-300
    borderRadius: 50, // Fully rounded corners
    padding: 10, // Adjust padding as needed
    opacity: 1, // Low opacity for the container
    justifyContent: 'center',
    alignItems: 'center', // Adjust height as necessary
  },
});

export default ChatHomePage;
