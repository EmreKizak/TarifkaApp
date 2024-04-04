import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Categories from './pages/Categories/Categories';
import Meals from './pages/Meals/Meals';
import Detail from './pages/Detail/Detail';

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{headerTintColor: 'orange', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{headerTintColor: 'orange', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerTintColor: 'orange', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
