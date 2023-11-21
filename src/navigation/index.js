import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStackScreens from './Auth';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './Bottom tabs';
import { useSelector } from 'react-redux';
import { selectLang } from 'store/auth';
import { InitI18n } from 'src/i18n';
import SubjectDetailScreen from 'screens/App/Subject Details';
import CoursesListScreen from 'screens/App/Courses List';



const RootStack = createNativeStackNavigator();

const RootStackScreens = () => {
    const Lang = useSelector(selectLang)
    useEffect(() => {
        InitI18n('en')
    }, [Lang])
    // const [Splash, setSplash] = React.useState(true)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSplash(false)
    //     }, 2000)
    // }, [])
    return (
        <RootStack.Navigator
            screenOptions={{ headerShown: false }
            }
            initialRouteName="Splash"
        >
            {/* {Splash && <RootStack.Screen name="Splash" component={SplashScreen} />} */}

            <RootStack.Screen name="Auth" component={AuthStackScreens} />

            <RootStack.Screen name="App" component={BottomTabs} />
            
            <RootStack.Screen name="CoursesList" component={CoursesListScreen} />
            <RootStack.Screen name="SubjectDetail" component={SubjectDetailScreen} />
        </RootStack.Navigator>
    );
};

export default RootStackScreens;
