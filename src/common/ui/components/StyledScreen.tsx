import React, {FC, PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {baseStyles} from '../styles/baseStyles';

type TProps = {
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
};

const StyledScreen: FC<PropsWithChildren<TProps>> = ({
  children,
  backgroundColor,
  style,
}) => {
  const screenBackgroundColor = backgroundColor || '#ffffff';

  const containerStyle = React.useMemo(() => {
    return [baseStyles.f1, {backgroundColor: screenBackgroundColor}, style];
  }, [screenBackgroundColor, style]);

  return <View style={containerStyle}>{children}</View>;
};
export {StyledScreen};
