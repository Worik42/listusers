import {useMemo, useState} from 'react';
import {useUsersStore} from './store';
import {usersApi} from './api';
import {UserLocal} from './types';
import {Alert} from 'react-native';

const useUsersDataProcess = () => {
  const {
    addUserToFavorites,
    delUserFromFavorites,
    favoriteUsers,
    setUsers,
    users,
  } = useUsersStore();

  const [uploading, setUploading] = useState(false);

  const _users: UserLocal[] = useMemo(
    () =>
      users.map(it => {
        const f = favoriteUsers.find(item => item === it.id);
        return {...it, isFavorite: !!f};
      }),
    [favoriteUsers, users],
  );

  const updateUsers = () => {
    setUploading(true);
    usersApi
      .getUsersAll()
      .then(setUsers)
      .catch(err => {
        Alert.alert('Error', `Error with status code ${err.response.status}`);
      })
      .finally(() => setUploading(false));
  };

  return {
    users: _users,
    updateUsers,
    addFavorite: addUserToFavorites,
    delFavorite: delUserFromFavorites,
    uploading,
  };
};

export {useUsersDataProcess};
