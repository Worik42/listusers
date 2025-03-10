import {useEffect, useMemo} from 'react';
import {useUsersStore} from './store';
import {usersApi} from './api';
import { UserLocal } from './types';

const useUsersDataProcess = () => {
  const {
    addUserToFavorites,
    delUserFromFavorites,
    favoriteUsers,
    setUsers,
    users,
  } = useUsersStore();

  const _users: UserLocal[] = useMemo(
    () =>
      users.map(it => {
        const f = favoriteUsers.find(item => item === it.id);
        return {...it, isFavorite: !!f};
      }),
    [favoriteUsers, users],
  );

  const updateUsers = () => {
    usersApi.getUsersAll().then(setUsers);
  };

  return {
    users: _users,
    updateUsers,
    addFavorite: addUserToFavorites,
    delFavorite: delUserFromFavorites,
  };
};

export {useUsersDataProcess};
