import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';



const CategoryMealsScreen = props => {
  return(
      <View style={styles.screen}>
          <Text>This is CategoryMealScreen!!</Text>
          <Button title="Go to Detail" onPress={() => props.navigation.navigate('MealDetail') }></Button>
      </View>
  )

};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});