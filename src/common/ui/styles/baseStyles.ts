import {StyleSheet} from 'react-native';
import {IS_IOS} from '../../utils/platformUtils';
import {colors} from './colors';

const baseStyles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  withShadow: {
    shadowColor: IS_IOS ? colors.shadow_ios : colors.shadow_android,
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  background: {
    backgroundColor: colors.background
  }
});

export {baseStyles};
