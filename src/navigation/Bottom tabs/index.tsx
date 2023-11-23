import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from 'theme';
import styles from './styles';
import HomeScreen from 'screens/App/Home';
import { Bell, Question, Home, Profile } from 'assets/icons';
import { useSelector } from 'react-redux';
import { selectLang } from 'store/auth';
import { InitI18n } from 'src/i18n';
import MainProfileScreen from 'screens/App/Profile';
import TopBar from '../TopBar/TopBar';

const BottomTab = createBottomTabNavigator();


export default function BottomTabs() {

    return (
        <BottomTab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.Red,
                tabBarInactiveTintColor: colors.secblack,
                tabBarStyle: styles.tabBarStyle
            })}>

            <BottomTab.Screen name={"TopBar"} component={TopBar} options={{
                title: '',
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.Calculator}>
                            <Question fill={'#fff'} />
                        </View>
                        :
                        <View style={styles.tabBarIcon}>
                            <Question fill={'#000'} />
                        </View>
                )
            }}
            ></BottomTab.Screen>

            <BottomTab.Screen name={"Home"} component={HomeScreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.Calculator}>
                            <Home stroke={'#fff'} fill={'#fff'} />
                        </View>
                        :
                        <View style={styles.tabBarIcon}>
                            <Home stroke={'#000'} fill={'#000'} />
                        </View>
                )
            }}></BottomTab.Screen>

            <BottomTab.Screen name={"Profile"} component={MainProfileScreen} options={{
                title: '',
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.Calculator}>
                            <Profile fill={'#fff'} />
                        </View>
                        :
                        <View style={styles.tabBarIcon}>
                            <Profile fill={'#000'} style={{ marginTop: 5 }} />
                        </View>
                )
            }}></BottomTab.Screen>

        </BottomTab.Navigator>
    );
}



