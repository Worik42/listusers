import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootNavigator} from '@common/core/navigation/RootNavigator';

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
