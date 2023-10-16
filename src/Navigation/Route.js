import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../Screens/Splash';
import Main from '../Screens/Main';
import HomePage from '../Screens/HomePage';


const Stack = createNativeStackNavigator();

export default function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Splash'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{


                    }}
                />
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{
                        title: "fals"
                    }}
                />
                <Stack.Screen name="HomePage"
                    component={HomePage}
                    options={{
                        title: "false"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}