import React from 'react';
import {Image} from 'react-native';
import commonStyles from '../styles/commonStyles';

export default function TabBarIconComp({imgSrc, imgColor, imgStyle = {}}) {
  return (
    <Image
      source={imgSrc}
      style={[commonStyles.tabBarIcons, imgStyle]}
      resizeMode="contain"
      tintColor={imgColor}
    />
  );
}
