import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  RefreshControl,
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import actions from '../../redux/actions';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ImageWithLoader from '../../Components/ImageWithLoader';

const {height, width} = Dimensions.get('window');

class Home extends Component {
  state = {
    carouselImgData: [],
    flatListImgData: [],
    activeSlide: 0,
    isLoading: true,
  };

  getImagesData = count => {
    this.setState({isLoading: true});
    actions
      .getImages(`?count=${count}&urls=true&httpsUrls=true`)
      .then(res => {
        console.log('RESPONSE: ', res);
        let updatedState = {
          isLoading: false,
        };
        updatedState.carouselImgData = res.slice(0, 5);
        updatedState.flatListImgData = res;
        this.setState(updatedState);
      })
      .catch(err => {
        console.log('ERROR: ', err);
        alert('Something went wrong, please try again later');
        this.setState({isLoading: false});
      });
  };

  componentDidMount() {
    this.getImagesData(20);
  }

  _renderItem = ({item, index}) => {
    return <Image source={{uri: item}} style={styles.carouselImgStyle} />;
  };

  renderListItems = ({item, index}) => {
    return <ImageWithLoader imgUri={item} />;
  };

  render() {
    console.log(this.state);
    const {carouselImgData, flatListImgData, activeSlide, isLoading} =
      this.state;
    return (
      <WrapperContainer statusBarColor={colors.black} isLoading={isLoading}>
        <View>
          <View>
            <Carousel
              data={carouselImgData}
              renderItem={this._renderItem}
              itemWidth={width}
              sliderWidth={width}
              onSnapToItem={index => this.setState({activeSlide: index})}
            />
          </View>
          <Pagination
            dotsLength={carouselImgData.length}
            activeDotIndex={activeSlide}
            dotStyle={styles.carouselDotStyle}
            inactiveDotStyle={{
              backgroundColor: colors.inactiveDotColor,
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={1}
            containerStyle={{
              position: 'absolute',
              bottom: 0,
              alignSelf: 'center',
            }}
          />
        </View>
        <FlatList
          data={flatListImgData}
          renderItem={this.renderListItems}
          numColumns={2}
          style={{marginTop: 8}}
        />
      </WrapperContainer>
    );
  }
}

export default Home;
