import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  carouselImgStyle: {
    resizeMode: 'cover',
    height: hp('35%'),
    width: width,
    alignSelf: 'center',
  },
  carouselDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.dotColor,
  },
});
