import * as React from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {spacings} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 56,
    paddingHorizontal: spacings[16],
    flexDirection: 'row',
  },
});

interface IProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const StyledHeaderContainer: React.FC<IProps> = ({style, children}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export {StyledHeaderContainer};
