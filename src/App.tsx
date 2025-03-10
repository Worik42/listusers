import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {RootNavigator} from './common/core/navigation/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App: FC = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
