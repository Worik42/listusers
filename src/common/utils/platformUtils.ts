import {Platform, Dimensions} from 'react-native';

export const {width: WIDTH_SCREEN, height: HEIGHT_SCREEN} =
  Dimensions.get('window');

export const IS_IOS = Platform.OS === 'ios';
