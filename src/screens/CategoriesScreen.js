import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const CategoriesScreen = props => {
  return(
      <View style={styles.screen}>
          <Text>This is CategoriesScreen!!</Text>
      </View>
  )

};

export default CategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});