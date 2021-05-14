import React, {useState} from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import MealsNavigator from './src/navigation/MealsNavigator'

enableScreens()

const fetchFonts= () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded,setFontLoaded] = useState(false)

  if(!fontLoaded) {
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err)}
/>
  }

  return (
   <MealsNavigator/>
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
