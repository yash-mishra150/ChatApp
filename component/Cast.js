import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ProfilePhoto from './ProfilePhoto';
export default function Cast({ cast, navigation }) {
  return (
    <View className="my-6">
      <View className='flex flex-row items-center justify-between w-screen px-5 mb-5'>
        <Text style={{ fontFamily: 'Poppins-Regular' }} className="text-lg text-white ">Recents</Text>
        <TouchableOpacity><Text style={{ fontFamily: 'Poppins-SemiBold' }} className='mr-2 text-lg text-white'>View All</Text></TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast && cast.map((person, index) => {
          return (
            <TouchableOpacity
            onPress={()=> navigation.navigate('Messages', { email: 'yashm4720@gmail.com' })
          }
              key={index}
              className="items-center mr-4"
            // onPress={()=> navigation.navigate('Person',person)}
            >
              <View className="items-center w-16 h-16 overflow-hidden ">
                <ProfilePhoto Class='w-[6.5vh] h-[6.5vh]' name='yash' />
              </View>
              <Text style={{ fontFamily: 'Poppins-Regular' }}  className="text-xs text-white ">
                Yash
              </Text>

            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}