import { View, Text, Dimensions, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Svg, { Circle, Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const GoogleLogo = () => (
  <Svg width="100" height="48" viewBox="0 0 110 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx="92" cy="24" r="24" fill="none" />
    <Path d="M103.565 24.4852C103.566 23.6961 103.499 22.9085 103.366 22.1309H92.4463V26.5902H98.7003C98.5724 27.3024 98.3015 27.9814 97.904 28.5861C97.5066 29.1908 96.9908 29.7088 96.3878 30.1088V33.0035H100.12C102.306 30.9885 103.565 28.0086 103.565 24.4852Z" fill="#4285F4" />
    <Path d="M92.4462 35.8001C95.5708 35.8001 98.2017 34.7741 100.12 33.0051L96.3878 30.1105C95.3489 30.8148 94.0109 31.2169 92.4462 31.2169C89.4261 31.2169 86.8628 29.181 85.9461 26.4375H82.1011V29.4206C83.0648 31.3383 84.5425 32.9503 86.3693 34.0768C88.1961 35.2034 90.3 35.8 92.4462 35.8001Z" fill="#34A853" />
    <Path d="M85.9461 26.4386C85.4615 25.0009 85.4615 23.4441 85.9461 22.0065V19.0234H82.1011C81.2904 20.6366 80.8682 22.4171 80.8682 24.2225C80.8682 26.028 81.2904 27.8084 82.1011 29.4216L85.9461 26.4386Z" fill="#FBBC04" />
    <Path d="M92.4462 17.2265C94.0974 17.1995 95.6929 17.8234 96.8879 18.9633L100.193 15.6586C98.0971 13.6904 95.3209 12.6098 92.4462 12.6433C90.3 12.6434 88.1961 13.24 86.3693 14.3666C84.5425 15.4931 83.0648 17.1051 82.1011 19.0228L85.9461 22.0059C86.8628 19.2624 89.4261 17.2265 92.4462 17.2265Z" fill="#EA4335" />
  </Svg>

);
var { width, height } = Dimensions.get('window');
const LoginPage = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: height * 0.05 }} className=' flex-1 px-[5vh] bg-white'>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} className='flex justify-start'><Icon name='arrow-left' size={20} color='#000' /></TouchableOpacity>
      <View style={{ paddingTop: height * 0.1 }} className='items-center'>
        <Text style={{ fontFamily: 'Poppins-Bold' }} className='text-3xl text-[#3D4A7A]'>Log in to Chatzo</Text>
        <Text style={{ fontFamily: 'Poppins-Regular' }} className={`text-neutral-400 text-lg text-center`} >Welcome back! Sign in using your social account or email to continue us</Text>
        <View className='flex flex-row justify-around gap-5 mt-[2vh]'>
          <TouchableOpacity style={{ width: width * 0.8, height: height * 0.06 }} className='flex flex-row items-center justify-start border-2 border-black rounded-full '>
            <View className='-ml-5'><GoogleLogo /></View><Text className='mx-3 text-xl font-bold text-black '>Continue with Google</Text>
          </TouchableOpacity>
        </View>
        <View className='mt-[3vh]' style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View className='bg-neutral-400' style={{ flex: 1, height: 1 }} />
          <View>
            <Text className='text-[1.7vh] text-neutral-400' style={{ width: 50, textAlign: 'center' }}>OR</Text>
          </View>
          <View className='bg-neutral-400' style={{ flex: 1, height: 1 }} />
        </View>
        <View style={{ width: width * 0.9, height: height * 0.3 }} className='items-center mt-10 text-white bg-white rounded-xl '>
          <View className='text-white rounded-xl'>
            <Text style={{ fontFamily: 'Poppins-SemiBold' }} className='mb-1 text-lg'>Your email</Text>
            <TextInput className='text-white   text-lg w-[39.5vh] placeholder:text-black border-black' style={{
              marginBottom: 15,
              paddingBottom: 15,
              alignSelf: "center",
              borderBottomWidth: 1
            }} />
            <Text style={{ fontFamily: 'Poppins-SemiBold' }} className='text-lg mt-[2vh] mb-1'>Password</Text>
            <TextInput className='text-white  text-lg w-[39.5vh] placeholder:text-black border-black' style={{
              marginBottom: 15,
              paddingBottom: 15,
              alignSelf: "center",
              borderBottomWidth: 1
            }} />
          </View>
          <TouchableOpacity className='rounded-full' style={{ width: width * 0.8, height: height * 0.06, marginTop: height * 0.15 }}>
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
              <Text className='text-lg' style={{ color: 'white', fontFamily: 'Poppins-Bold' }}>Log in</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
            <Text className='text-[#3D4A7A] mt-3' style={{ fontFamily: 'Poppins-SemiBold' }}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginPage