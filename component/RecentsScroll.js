import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Images185 } from '../api/moviedb';

export default function RecentsScroll({ cast, navigation }) {
  let personName = 'Keanu Reevs';
  let CharacterName = 'John Wick';
  return (
    <View className="my-6">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast && cast.map((person, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="items-center mr-4"
            //   onPress={()=> navigation.navigate('Person',person)}
            >
              <View className="items-center w-20 h-20 overflow-hidden border rounded-full border-neutral-500">
                <Image
                  className="w-20 h-24 rounded-2xl"
                  // source={require('../assets/CastPerson1.png')}
                  source={{uri: Images185(person?.profile_path)}}
                />
              </View>
              <Text className="mt-1 text-xs text-white">
                {
                  person?.character.length > 10 ? person?.character.slice(0, 10) + '...' : person?.character
                }
              </Text>
              
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}