import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  textStyle: {
    fontSize: hp('5%'),
    fontWeight: 'bold',
  },
});
