import { StackNavigator } from 'react-navigation';

import Main from '../screens/Main';

const BaseNavigation = StackNavigator({
  	Main: { screen: Main },
},{
	initialRouteName: 'Main',
  	headerMode: 'none',
});

export default BaseNavigation;
