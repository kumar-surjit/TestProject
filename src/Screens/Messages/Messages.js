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
import commonStyles from '../../styles/commonStyles';
import strings from '../../constants/lang';

export default class Messages extends Component {
  state = {};

  render() {
    const {} = this.state;
    return (
      <WrapperContainer
        statusBarColor={colors.black}
        containerStyle={commonStyles.centerInContainer}>
        <Text style={styles.textStyle}>{strings.MESSAGES}</Text>
      </WrapperContainer>
    );
  }
}
