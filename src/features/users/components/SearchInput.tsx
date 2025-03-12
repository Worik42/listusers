import { colors, spacings } from '@common/ui/styles';
import React, {FC} from 'react';
import {StyleSheet, TextInput} from 'react-native';

type TProps = {
  text?: string;
  setText: (text: string) => void;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacings[16],
    borderRadius: spacings[12],
    backgroundColor: colors.gray_light,
    height: 45,
    paddingHorizontal: spacings[4],
    color: colors.static_white,
  },
});

const SearchInput: FC<TProps> = ({setText, text}) => {
  return (
    <TextInput
      style={styles.container}
      placeholder="Search..."
      value={text}
      placeholderTextColor={colors.static_white}
      onChangeText={setText}
    />
  );
};

export {SearchInput};
