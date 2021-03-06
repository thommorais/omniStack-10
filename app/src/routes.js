import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'DevMap'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil do GitHub'
      }
    }
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#ffffff',
      headerBackTitleVisible: false,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#7d40e7',
      }
    }
  })
);

export default Routes;
