import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {baseScreenOptions} from './screenOptions';
import {ROUTES} from './routes';
import { UserDetailScreen } from '@features/users/screens/UserDetailScreen';
import { UsersScreen } from '@features/users/screens/UsersScreen';

export type RootStackParamsList = {
  [ROUTES.UsersScreen]: undefined;
  [ROUTES.UserDetailScreen]: {
    userId: number
  };
};

const Stack = createStackNavigator<RootStackParamsList>();

const RootStack: FC = () => {
  return (
    <>
      <Stack.Navigator screenOptions={baseScreenOptions}>
        <Stack.Screen name={ROUTES.UsersScreen} component={UsersScreen} />
        <Stack.Screen name={ROUTES.UserDetailScreen} component={UserDetailScreen} />
      </Stack.Navigator>
    </>
  );
};

export {RootStack};
