import React,{Component}  from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { persistStore } from 'redux-persist';
import { registerScreens } from './src/container/screens';
import configureStore from './store/configstore';
const store = configureStore();
persistStore(store, null, () => {
      registerScreens(store, Provider)
			Navigation.startSingleScreenApp({
			screen: {
				screen: 'yourprojectname.screenone',
				
				title: 'screenone',
				
				},
				appStyle: {
					orientation:'portrait'
				},
				
			});
		  });
	

