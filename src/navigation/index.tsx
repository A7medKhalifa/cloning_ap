import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen, MainPageScreen } from '../screens';
import { NavigationContainer, } from '@react-navigation/native';




export type RootStack = {
    MainPage: undefined;
    Details: undefined;

};

const RootStack = createNativeStackNavigator<RootStack>();

const RootStackScreens = () => {

    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{ headerShown: false }
                }
                initialRouteName="MainPage"
            >
                <RootStack.Screen name="MainPage" component={MainPageScreen} />
                <RootStack.Screen name="Details" component={DetailsScreen} />
            </RootStack.Navigator>
        </NavigationContainer>

    );
};

export default RootStackScreens;
