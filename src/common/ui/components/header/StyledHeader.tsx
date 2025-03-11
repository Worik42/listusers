import React from 'react';
import type {ViewStyle} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

import {baseStyles, spacings} from '../../styles';

import {StyledHeaderContainer} from './components/StyledHeaderContainer';
import {StyledBackForHeader} from './components/StyledBackForHeader';

interface IProps {
  title?: string;
  customLeftButton?: React.ReactNode;
  customRightButton?: React.ReactNode;
  onBackPress?: () => void;
  style?: ViewStyle;
}

const styles = StyleSheet.create({
    title: {
        fontSize: spacings[16],
        fontWeight: 700,
    }
})

const StyledHeader: React.FC<IProps> = ({
  title,
  customRightButton,
  customLeftButton,
  onBackPress,
  style,
}) => {
  return (
    <StyledHeaderContainer style={style}>
      {customLeftButton ? (
        customLeftButton
      ) : (
        <StyledBackForHeader onPress={onBackPress} />
      )}
      <View style={baseStyles.f1}>
        <Text style={styles.title} numberOfLines={1}>{title || ''}</Text>
      </View>
      {customRightButton ? customRightButton : null}
    </StyledHeaderContainer>
  );
};

export {StyledHeader};
