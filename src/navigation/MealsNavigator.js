import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'


import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail:MealDetailScreen
},
{
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:  Colors.primary
      },
      headerTintColor: 'white',
      headerTitle: 'A Screen'
    }
  }
);

export default createAppContainer(MealsNavigator)