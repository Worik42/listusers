import React, {FC} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {spacings} from '../../../common/ui/styles/spacings';

type TProps = {
  text?: string;
  setText: (text: string) => void;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacings[16],
    // borderWidth: spacings[2],
    borderRadius: spacings[12],
    backgroundColor: '#778da9',
  },
});

const SearchInput: FC<TProps> = ({setText, text}) => {
  return (
    <TextInput
      style={styles.container}
      placeholder="Search..."
      value={text}
      onChangeText={setText}
    />
  );
};

export {SearchInput};
