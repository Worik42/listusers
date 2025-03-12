import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootNavigator} from '@common/core/navigation/RootNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {baseStyles} from '@common/ui/styles';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <SafeAreaView style={[baseStyles.f1, baseStyles.background]}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
