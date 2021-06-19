import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
});
