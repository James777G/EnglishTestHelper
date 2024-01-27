// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from '../pages/App';
import NextPage from '../pages/NextPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={StartPage} />
                <Stack.Screen name="Next" component={NextPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
