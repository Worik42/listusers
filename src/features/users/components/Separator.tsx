import { spacings } from '@common/ui/styles';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: spacings[4],
  },
});

const Separator: FC = () => <View style={styles.container} />;

export {Separator};
