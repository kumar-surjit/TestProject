import React from 'react';
import {View, Text, SafeAreaView, StatusBar, Platform} from 'react-native';
import colors from '../styles/colors';
import Loader from './Loader';

export default function WrapperContainer({
  children,
  statusBarColor = colors.white,
  barStyle = Platform.OS == 'ios' ? 'dark-content' : 'light-content',
  bgColor = colors.white,
  containerStyle = {},
  isLoading = false,
}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={{...containerStyle, flex: 1, backgroundColor: bgColor}}>
        {children}
      </View>
      <Loader isLoading={isLoading} />
    </SafeAreaView>
  );
}
