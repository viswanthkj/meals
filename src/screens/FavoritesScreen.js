import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const FavoritesScreen = props => {
  return(
      <View style={styles.screen}>
          <Text>This is FavoritesScreen!!</Text>
      </View>
  )

};

export default FavoritesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});