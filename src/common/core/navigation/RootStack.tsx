import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {baseScreenOptions} from './screenOptions';
import {ROUTES} from './routes';
import {UsersScreen} from '../../../features/users/screens/UsersScreen';
import { UserScreen } from '../../../features/users/screens/UserScreen';

export type RootStackParamsList = {
  [ROUTES.UsersScreen]: undefined;
  [ROUTES.UserScreen]: {
    userId: number
  };
};

const Stack = createStackNavigator<RootStackParamsList>();

const RootStack: FC = () => {
  return (
    <>
      <Stack.Navigator screenOptions={baseScreenOptions}>
        <Stack.Screen name={ROUTES.UsersScreen} component={UsersScreen} />
        <Stack.Screen name={ROUTES.UserScreen} component={UserScreen} />
      </Stack.Navigator>
    </>
  );
};

export {RootStack};
