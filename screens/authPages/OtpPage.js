import { View, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const OtpPage = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputsRef = useRef([]);

    const handleChangeText = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Focus next input
        if (text && index < 3) {
            const nextInput = inputsRef.current[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    return (
        <View style={{ paddingTop: height * 0.05 }} className="flex-1 px-[5vh] bg-white">
            <TouchableOpacity onPress={() => navigation.navigate('Login')} className="flex justify-start">
                <Icon name="arrow-left" size={20} color="#000" />
            </TouchableOpacity>
            <View style={{ paddingTop: height * 0.1 }} className="items-center">
                <Text style={{ fontFamily: 'Poppins-Bold' }} className="text-3xl text-[#3D4A7A]">
                    Enter OTP
                </Text>
                <Text style={{ fontFamily: 'Poppins-Regular' }} className="text-lg text-center text-neutral-400">
                    Please Enter the otp that is sent to your email
                </Text>

                <View
                    style={{ width: width * 0.9, height: height * 0.3 }}
                    className="justify-center mt-10 text-white bg-white rounded-xl"
                >
                    <View style={{ marginTop: width * 0.6 }} className="text-white rounded-xl">
                        
                        <View className="flex-row self-center justify-between">
                            {otp.map((digit, index) => (
                                <TextInput
                                    key={index}
                                    value={digit}
                                    onChangeText={(text) => handleChangeText(text, index)}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    className="text-lg text-center border-black rounded-xl"
                                    style={{
                                        width: width * 0.1,
                                        height: width * 0.1,
                                        borderWidth: 1,
                                        marginHorizontal: width * 0.05,
                                        padding: 2,
                                    }}
                                    ref={(input) => (inputsRef.current[index] = input)}
                                />
                            ))}
                        </View>
                        <TouchableOpacity >
                            <Text className='text-[#3D4A7A] mt-3' style={{ fontFamily: 'Poppins-SemiBold', marginLeft: width*0.65 }}>Resend?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity  className='self-center rounded-full' style={{ width: width * 0.8, height: height * 0.06, marginTop: height * 0.42 }}>
                        <LinearGradient
                            colors={['#000000', '#4158CF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            className='rounded-2xl'
                            style={{
                                flex: 1,
                                borderRadius: 8,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text className='text-lg' style={{ color: 'white', fontFamily: 'Poppins-Bold' }}>Verify OTP</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default OtpPage;
