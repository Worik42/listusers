import {StyleSheet} from 'react-native';
import { IS_IOS } from '../../utils/platformUtils';

const baseStyles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  withShadow: {
    shadowColor: IS_IOS ? '#4A5568' : '#b1bac9',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
});

export {baseStyles};
