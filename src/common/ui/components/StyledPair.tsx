import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, spacings} from '../styles';

type TProps = {
  title: string;
  value: string;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: spacings[4],
  },
  title: {
    fontSize: spacings[12],
    color: colors.subtitle,
  },
  value: {
    fontSize: spacings[16],
    color: colors.title,
    fontWeight: '500',
  },
});

const StyledPair: FC<TProps> = ({title, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export {StyledPair};
