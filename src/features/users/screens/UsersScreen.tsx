import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useEffect, useMemo, useState} from 'react';
import {RefreshControl, StyleSheet, View} from 'react-native';
import {useUsersDataProcess} from '../hooks';
import {FlatList} from 'react-native-gesture-handler';
import {RootStackParamsList} from '@common/core/navigation/RootStack';
import {ROUTES} from '@common/core/navigation/routes';
import {StyledScreen} from '@common/ui/components/StyledScreen';
import {SearchInput} from '../components/SearchInput';
import {UserCard} from '../components/UserCard';
import {UserLocal} from '../types';
import {colors, spacings} from '@common/ui/styles';

type TProps = NativeStackScreenProps<RootStackParamsList, ROUTES.UsersScreen>;

const styles = StyleSheet.create({
  containerList: {
    marginHorizontal: spacings[16],
  },
  containerInput: {
    marginTop: spacings[12],
  },
});

const UsersScreen: FC<TProps> = ({navigation}) => {
  const {updateUsers, users, uploading} = useUsersDataProcess();

  const [searchText, setSearchText] = useState<string>('');

  const _users = useMemo(() => {
    if (!searchText.length) {
      return users;
    }
    const text = searchText.toLocaleLowerCase();
    return users.filter(it => it.name.toLocaleLowerCase().includes(text));
  }, [users, searchText]);

  const navigateToDetail = (id: number) => {
    navigation.push(ROUTES.UserDetailScreen, {userId: id});
  };

  const renderUserCard = ({item}: {item: UserLocal}) => (
    <UserCard
      city={item.address.city}
      email={item.email}
      fullName={item.name}
      onPress={() => navigateToDetail(item.id)}
      isFavorite={item.isFavorite}
    />
  );

  const keyExtractor = (item: UserLocal, index: number) =>
    `users__list__${index}_${item.id}`;

  useEffect(() => {
    updateUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledScreen backgroundColor={colors.background}>
      <View style={styles.containerInput}>
        <SearchInput text={searchText} setText={setSearchText} />
      </View>
      <FlatList
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.containerList}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            enabled
            refreshing={uploading}
            onRefresh={updateUsers}
          />
        }
        data={_users}
        renderItem={renderUserCard}
      />
    </StyledScreen>
  );
};

export {UsersScreen};
