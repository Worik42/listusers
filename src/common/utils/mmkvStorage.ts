import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const mmkvStorage = {
  setItem: (key: string, value: string | number | boolean | Uint8Array) => {
    return storage.set(key, value);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return value === undefined ? null : value;
  },
  removeItem: (key: string) => {
    return storage.delete(key);
  },
  getAllKeys: () => storage.getAllKeys(),
  multiRemove: (keys: string[]) => {
    return keys.forEach(key => {
      storage.delete(key);
    });
  },
};
