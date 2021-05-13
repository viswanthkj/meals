import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummy-data'



const CategoriesScreen = props => {
  const renderGridItem = (itemData) => {
      return(
          <View style={styles.gridScreen}> 
              <Text>{itemData.item.title}</Text>
          </View>
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