import React from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = props => {
  const renderGridItem = (itemData) => {
      return(
          <TouchableOpacity style={styles.gridScreen} onPress={() => props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id})}>
          <View> 
              <Text>{itemData.item.title}</Text>
          </View>
          </TouchableOpacity>
      )
  }

  return(
    <FlatList 
       keyExtractor={(item,index) => item.id}
       numColumns={2}
       data={CATEGORIES}
       renderItem={renderGridItem}
    />
  )

};

export default CategoriesScreen;

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridScreen: {
        flex: 1,
        margin: 15,
        height: 150
    }
});