import React from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {baseStyles} from '../styles/baseStyles';
import { spacings } from '../styles/spacings';
import { useDebounceFunc } from '@common/hooks/useDebounce';
import { hapticsFeedback } from '@common/utils/haptic';
import { colors } from '../styles';

const styles = StyleSheet.create({
  container: {
    marginVertical: spacings[8],
    borderRadius: spacings[16],
    padding: spacings[16],
    backgroundColor: colors.static_white,
  },
});

interface IProps {
  onPress?: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  withoutShadow?: boolean;
  testID?: string;
}

const StyledCard: React.FC<React.PropsWithChildren<IProps>> = ({
  style,
  onPress,
  onLongPress,
  children,
  disabled,
  withoutShadow,
  testID,
}) => {
  const onPressFunc = useDebounceFunc(() => {
    hapticsFeedback();
    onPress?.();
  });
  return (
    <TouchableOpacity
      testID={testID}
      disabled={disabled}
      onPress={onPressFunc}
      activeOpacity={0.7}
      onLongPress={onLongPress}
      style={[
        styles.container,
        !withoutShadow && baseStyles.withShadow,
        style,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

export {StyledCard};
