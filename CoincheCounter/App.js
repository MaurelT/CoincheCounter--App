/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainGame from './MainGame';
import Connection from './Connection';
import History from './MatchHistory';

const MainNavigator = createStackNavigator(
  {
    MainGame: {screen: MainGame},
    Connection: {screen: Connection},
    History: {screen: History},
  },
  {
    header: {visible: false},
    headerMode: 'none',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
