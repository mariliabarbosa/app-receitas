import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecipeIndex from './src/RecipeIndex'
import RecipePage from './src/RecipePage'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Index"
          component={RecipeIndex}
        />
        <Stack.Screen 
          name="Recipe" 
          component={RecipePage} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

