import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarIcons: {
    width: 24,
    height: 24,
  },
  rowWithSpaceBtwn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
