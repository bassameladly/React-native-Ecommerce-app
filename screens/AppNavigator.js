import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import BooksScreen from './BooksScreen';
import ElectronicsScreen from './ElectronicsScreen';
import ShoppingCartIcon from '../containers/ShoppingCartIcon';
import CartScreen from './CartScreen';
import DetailsScreen from './DetailsScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Books: BooksScreen,
    Electronics: ElectronicsScreen,
    Cart: CartScreen,
    Details: DetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerRight: () => <ShoppingCartIcon />,
      headerTintColor: 'white',
      headerStyle: {backgroundColor: '#1e90ff'},
      cardStyle: {backgroundColor: '#EBF5F0'},
    },
  },
);
export default createAppContainer(AppNavigator);
