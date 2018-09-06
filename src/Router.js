import { StackNavigator } from 'react-navigation';

import Main from './components/Main';

const BaseNavigation = StackNavigator({
  	Main: { screen: Main },
},{
	initialRouteName: 'Main',
  	headerMode: 'none',
});

export default BaseNavigation;
