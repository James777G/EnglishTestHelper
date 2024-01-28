/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigation from "./react/router/AppNavigation";

AppRegistry.registerComponent(appName, () => AppNavigation);
