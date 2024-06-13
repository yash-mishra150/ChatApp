import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const MessagesShow = ({ messages, navigation }) => {
    return (
        <StyledView className=''>
            {messages && messages.length > 0 ? (
                messages.map((data, index) => (
                    <TouchableOpacity
                    onPress={()=> navigation.navigate('Messages', { email: 'yashm4720@gmail.com' })
                }
                        key={index}
                        className="flex-row items-center justify-around p-4"
                    >
                        <ProfilePhoto name={data.name} />
                        <StyledView className="flex-col items-start -ml-5">
                            <StyledText style={{fontFamily: 'Poppins-SemiBold'}} className="text-xl text-white">
                                {data.name}
                            </StyledText>
                            <StyledText style={{fontFamily: 'Poppins-Regular'}} className="text-neutral-400">
                                {data.message}
                            </StyledText>
                        </StyledView>
                        <StyledView className="flex-col items-end ml-16">
                            <StyledText style={{fontFamily: 'Poppins-Regular'}} className="text-gray-400">
                                {data.time}
                            </StyledText>
                            {data.unreadCount > 0 && (
                                <StyledView className="flex items-center justify-center w-6 h-6 bg-red-600 rounded-full">
                                    <StyledText style={{fontFamily: 'Poppins-SemiBold'}} className="text-white">
                                        {data.unreadCount}
                                    </StyledText>
                                </StyledView>
                            )}
                        </StyledView>
                    </TouchableOpacity>
                ))
            ) : (
                <StyledView className='flex items-center justify-center p-4'>
                    <StyledText style={{fontFamily: 'Poppins-SemiBold'}} className='text-lg text-white'>
                        No messages available at this time
                    </StyledText>
                </StyledView>
            )}
        </StyledView>
    );
};

export default MessagesShow;
