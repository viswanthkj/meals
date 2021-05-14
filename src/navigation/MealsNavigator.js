import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor:  Colors.primary
  },
  headerTintColor: 'white',
  headerTitle: 'A Screen'
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
},
{
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel: 'Meals'
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accent,
      tabBarLabel: 'Favorites'
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primary
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accent
        }
      });

      const FiltersNavigator = createStackNavigator(
        {
          Filters: FiltersScreen
        },
        {
          // navigationOptions: {
          //   drawerLabel: 'Filters!!!!'
          // },
          defaultNavigationOptions: defaultStackNavOptions
        }
      );
      
      const MainNavigator = createDrawerNavigator(
        {
          MealsFavs: {
            screen: MealsFavTabNavigator,
            navigationOptions: {
              drawerLabel: 'Meals'
            }
          },
          Filters: FiltersNavigator
        },
        {
          contentOptions: {
            activeTintColor: Colors.accentColor,
          }
        }
      );

export default createAppContainer(MainNavigator)