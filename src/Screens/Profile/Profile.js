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
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import ModalComp from '../../Components/ModalComp';
// import DatePicker from 'react-native-modern-datepicker';
// import moment from 'moment';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import ImagePicker from 'react-native-image-crop-picker';

export default class Profile extends Component {
  state = {};

  render() {
    const {} = this.state;
    return (
      <WrapperContainer
        statusBarColor={colors.black}
        containerStyle={styles.containerStyle}>
        <HeaderComp headerText="PROFILE" />
      </WrapperContainer>
    );
  }
}
