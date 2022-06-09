import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'Store',
            headerStyle: {backgroundColor: '#90caf9'},
            headerTitleStyle: {color: '#fff'},
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detail',
            headerStyle: {backgroundColor: '#90caf9'},
            headerTintColor: '#f432f4',
            headerTitleStyle: {color: '#fff'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
