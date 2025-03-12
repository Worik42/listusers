import React, {FC, ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {baseStyles, colors, spacings} from '../styles';

type TProps = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: ReactNode;
  text: string;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacings[8],
    borderRadius: spacings[16],
    padding: spacings[16],
    backgroundColor: colors.static_white,
    marginHorizontal: spacings[16],
  },
  text: {
    fontSize: spacings[16],
    marginLeft: spacings[12],
    color: colors.title,
  },
  containerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const StyledButton: FC<TProps> = ({onPress, style, icon, text}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, baseStyles.withShadow, style]}
      onPress={onPress}>
      <View style={styles.containerContent}>
        <View>{icon}</View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {StyledButton};
