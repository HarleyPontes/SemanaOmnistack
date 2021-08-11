import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import React from 'react';

const AppStack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents}/>
                <AppStack.Screen name="Detail" component={Detail}/>
            </AppStack.Navigator>

        </NavigationContainer>
    );
}