import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {DotIndicator} from 'react-native-indicators';
import colors from '../styles/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ImageWithLoader({imgUri}) {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <View style={styles.itemContainer}>
      <Image
        source={{uri: imgUri}}
        style={styles.imgStyle}
        onLoadEnd={() => setIsLoading(false)}
      />
      {isLoading && (
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}>
          <DotIndicator color={colors.themeColor} size={12} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    // backgroundColor: colors.themeWhite,
    borderRadius: 8,
    width: Dimensions.get('window').width / 2.3,
    marginVertical: 12,
    marginHorizontal: 12,
    // paddingBottom: 16,
    elevation: 4,
  },
  imgStyle: {height: hp('30%'), borderRadius: 8},
});
