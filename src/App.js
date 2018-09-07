import React from 'react';
import { Provider } from 'react-redux';

import Store from './config/store';
import BaseNavigation from './config/router';

const App = () => (
  	<Provider store={Store}>
    	<BaseNavigation />
  	</Provider>
);

export default App;
