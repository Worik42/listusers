import {create} from 'zustand';
import {Users} from './types';
import {createJSONStorage, persist} from 'zustand/middleware';
import {mmkvStorage} from '../../common/utils/mmkvStorage';

type TUsersState = {
  users: Users;
  favoriteUsers: number[];
};

const initialUsersState: TUsersState = {
  users: [],
  favoriteUsers: [],
};

type TUsersActions = {
  setUsers: (users: Users) => void;
  addUserToFavorites: (id: number) => void;
  delUserFromFavorites: (id: number) => void;
};

const useUsersStore = create(
  persist<TUsersState & TUsersActions>(
    (set, _get) => ({
      ...initialUsersState,
      setUsers: (users: Users) => set(() => ({users})),
      addUserToFavorites: id =>
        set(state => {
          const favorites = [...state.favoriteUsers];
          favorites.push(id);
          return {
            favoriteUsers: favorites,
          };
        }),
      delUserFromFavorites: id =>
        set(state => {
          const favorites = [...state.favoriteUsers];
          const _favorites = favorites.filter(item => item !== id);
          return {
            favoriteUsers: _favorites,
          };
        }),
    }),
    {
      name: 'users-store',
      partialize: state => ({favoriteUsers: state.favoriteUsers }) as TUsersState & TUsersActions, //https://github.com/pmndrs/zustand/issues/1053 Пришлось привести типы.
      storage: createJSONStorage(() => mmkvStorage),
      version: 1,
    },
  ),
);

export {useUsersStore};
