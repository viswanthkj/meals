import React, {useState} from 'react';
import { useFonts } from "expo-font";
import { StyleSheet, Text, View, LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import MealsNavigator from './src/navigation/MealsNavigator'
import { createStore, combineReducers } from "redux";
import { Provider } from 'react-redux';
import mealsReducer from './src/store/reducers/meals'


LogBox.ignoreAllLogs();


enableScreens()

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer)



export default function App() {
  
  let [fontLoaded]= useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontLoaded) {
    <AppLoading
      onError={(err) => console.log(err)}
/>
  }

  return (
    <Provider store={store}>
      <MealsNavigator/>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
