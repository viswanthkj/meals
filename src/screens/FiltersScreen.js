import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const FiltersScreen = props => {
  return(
      <View style={styles.screen}>
          <Text>This is FiltersScreen!!</Text>
      </View>
  )

};

export default FiltersScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});