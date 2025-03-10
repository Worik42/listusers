import ReactNativeHapticFeedback, {
  HapticFeedbackTypes,
} from 'react-native-haptic-feedback';
import {IS_IOS} from './platformUtils';

const options = {
  enableVibrateFallback: false,
  ignoreAndroidSystemSettings: true,
};

const hapticsFeedback = (
  type: HapticFeedbackTypes = IS_IOS
    ? HapticFeedbackTypes.impactLight
    : HapticFeedbackTypes.virtualKey,
) => ReactNativeHapticFeedback.trigger(type, options);

const hapticsFeedbackError = () => {
  ReactNativeHapticFeedback.trigger('notificationError', options);
};

export {hapticsFeedback, hapticsFeedbackError};
