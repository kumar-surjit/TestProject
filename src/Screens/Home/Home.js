import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Home extends Component {
  state = {};

  render() {
    const {} = this.state;
    return (
      <WrapperContainer
        statusBarColor={colors.black}
        containerStyle={styles.containerStyle}></WrapperContainer>
    );
  }
}
