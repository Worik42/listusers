/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {enableFreeze} from 'react-native-screens';

import App from './src/App';
import {name as appName} from './app.json';

enableFreeze(true);

function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }
  return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
