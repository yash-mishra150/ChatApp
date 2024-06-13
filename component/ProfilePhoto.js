import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

// Utility function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Utility function to determine if a color is light or dark
const isColorLight = (color) => {
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
};

// Styled View using NativeWind
const StyledView = styled(View);
const StyledText = styled(Text);

const ProfilePhoto = ({ name, Class, text }) => {
  const backgroundColor = getRandomColor();
  const firstLetter = name ? name[0].toUpperCase() : '';
  const textColor = isColorLight(backgroundColor) ? 'black' : 'white';

  return (
    <StyledView
      className={`w-[5.5vh] h-[5.5vh]  rounded-full flex items-center justify-center ${Class}`}
      style={{ backgroundColor }}
    >
      <StyledText
        className="font-bold"
        style={{ color: textColor, fontSize: 23 }}
      >
        {firstLetter}
      </StyledText>
    </StyledView>
  );
};

export default ProfilePhoto;
