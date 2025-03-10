import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';

export const baseScreenOptions: StackNavigationOptions = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
    cardStyle: { backgroundColor: 'transparent' },
    detachPreviousScreen: false,
  }