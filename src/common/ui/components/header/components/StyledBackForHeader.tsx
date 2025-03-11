import React from 'react';
import type {ViewStyle, StyleProp} from 'react-native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useDebounceFunc} from '@common/hooks/useDebounce';
import {spacings} from '../../../styles';
import {hitSlop} from '@common/utils';
import {BackArrowIcon} from '../../../icons/BackArrowIcon';

const styles = StyleSheet.create({
  btnWrapper: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacings[24],
  },
});

interface IProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const StyledBackForHeader: React.FC<IProps> = ({onPress, style}) => {
  const navigation = useNavigation();
  const onPressFunc = useDebounceFunc(() => {
    if (onPress) {
      onPress();
      return;
    }
    navigation.goBack();
  });
  return (
    <TouchableOpacity
      hitSlop={hitSlop}
      style={[styles.btnWrapper, style]}
      onPress={onPressFunc}>
      <View>
        <BackArrowIcon color={'#2B303B'} />
      </View>
    </TouchableOpacity>
  );
};

export {StyledBackForHeader};
