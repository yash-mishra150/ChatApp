import { View, Text, Dimensions, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

var { width, height } = Dimensions.get('window');
const ChangePassword = () => {
    const navigation = useNavigation();
    return (
        <View style={{paddingTop: height * 0.05}} className=' flex-1 px-[5vh] bg-white'>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} className='flex justify-start'><Icon name='arrow-left' size={20} color='#000' /></TouchableOpacity>
            <View style={{paddingTop: height * 0.1}} className='items-center'>
                <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-3xl text-[#3D4A7A]'>Password Change</Text>
                <Text style={{ fontFamily: 'Poppins-Regular' }} className={`text-neutral-400 text-lg text-center`} >Enter a unique password </Text>

                <View style={{ width: width * 0.9, height: height * 0.3 }} className='items-center mt-10 text-white bg-white rounded-xl '>
                    <View className='text-white mt-[6vh] rounded-xl'>
                        <Text style={{ fontFamily: 'Poppins-SemiBold' }} className='mb-1 text-lg'>New Password</Text>
                        <TextInput className='text-white   text-lg w-[39.5vh] placeholder:text-black border-black' style={{
                            marginBottom: 15,
                            paddingBottom: 15,
                            alignSelf: "center",
                            borderBottomWidth: 1
                        }} />
                        <Text style={{ fontFamily: 'Poppins-SemiBold' }} className='text-lg mt-[2vh] mb-1'>Confirm Password</Text>
                        <TextInput className='text-white  text-lg w-[39.5vh] placeholder:text-black border-black' style={{
                            marginBottom: 15,
                            paddingBottom: 15,
                            alignSelf: "center",
                            borderBottomWidth: 1
                        }} />
                    </View>
                    <TouchableOpacity  className='rounded-full ' style={{ width: width * 0.8, height: height * 0.06, marginTop: height * 0.24 }}>
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
                            <Text className='text-lg' style={{ color: 'white', fontFamily: 'Poppins-Bold' }}>Change Password</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ChangePassword