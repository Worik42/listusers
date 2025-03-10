import React, {FC} from 'react';
import {StyledCard} from '../../../common/ui/StyledCard';
import {Text} from 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {FavoriteIcon} from '../../../common/ui/icons/FavoriteIcon';
import { baseStyles } from '../../../common/ui/styles/baseStyles';

type TProps = {
  fullName: string;
  email: string;
  city: string;
  isFavorite?: boolean;
  onPress?: () => void
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  containerIcon: {
    flex: 0.1,
    alignItems: 'flex-end',
  }
});

const UserCard: FC<TProps> = ({city, email, fullName, isFavorite, onPress}) => {
  return (
    <StyledCard onPress={onPress} style={styles.container}>
      <View style={baseStyles.f1}>
        <Text>{fullName}</Text>
        <Text>{email}</Text>
        <Text>{city}</Text>
      </View>
      <View style={styles.containerIcon}>
        <FavoriteIcon color={isFavorite ? '#ef0e0e' : '#000'} />
      </View>
    </StyledCard>
  );
};

export {UserCard};
