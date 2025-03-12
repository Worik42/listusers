import React, {FC, useMemo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '@common/core/navigation/RootStack';
import {ROUTES} from '@common/core/navigation/routes';
import {StyledScreen} from '@common/ui/components/StyledScreen';
import {StyledHeader} from '@common/ui/components/header/StyledHeader';
import {useUsersDataProcess} from '../hooks';
import {StyleSheet, View} from 'react-native';
import {StyledPair} from '@common/ui/components/StyledPair';
import {colors, spacings} from '@common/ui/styles';
import {StyledButton} from '@common/ui/components/StyledButton';
import {FavoriteIcon} from '@common/ui/icons';

type TProps = NativeStackScreenProps<
  RootStackParamsList,
  ROUTES.UserDetailScreen
>;

const styles = StyleSheet.create({
  containerContent: {
    marginHorizontal: spacings[16],
  },
});

const UserDetailScreen: FC<TProps> = ({navigation, route}) => {
  const {addFavorite, delFavorite, users} = useUsersDataProcess();
  const user = useMemo(
    () => users.find(it => it.id === route.params.userId),
    [route.params.userId, users],
  );

  const onPressFavorite = () => {
    if (user) {
      user.isFavorite ? delFavorite(user.id) : addFavorite(user.id);
    }
  };

  return (
    <StyledScreen backgroundColor={colors.background}>
      <StyledHeader
        title={user?.name}
        onBackPress={() => navigation.goBack()}
      />
      {user ? (
        <>
          <View style={styles.containerContent}>
            <StyledPair title="Email" value={user.email} />
            <StyledPair title="Phone" value={user.phone} />
            <StyledPair title="Company" value={user.company.name} />
          </View>
          <StyledButton
            text={user.isFavorite ? 'Added to favorites' : 'Add to favorites'}
            onPress={onPressFavorite}
            icon={<FavoriteIcon color={user.isFavorite ? colors.red : colors.static_black} />}
          />
        </>
      ) : null}
    </StyledScreen>
  );
};

export {UserDetailScreen};
