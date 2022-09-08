import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Calculadora from './pages/Calculadora';
import Decisoes from './pages/Decisoes';
import Investimentos from './pages/Investimentos';

import {Entypo, Feather, MaterialCommunityIcons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                backgroundColor: '#121212',
                borderTopColor: 'transparent',
                paddingBottom: 5,
            },
            tabBarActiveTintColor:'#8d0d0d'
        }}>
            <Tab.Screen 
            name="Calculadora" 
            component={Calculadora}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Entypo name="calculator" size={size} color={color}></Entypo>
                )
            }}></Tab.Screen>
            
            <Tab.Screen 
            name="Decisões" 
            component={Decisoes}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Feather name = 'activity' size={size} color={color}></Feather>
                )
            }}
            ></Tab.Screen>
            <Tab.Screen 
            name="Investimentos" 
            component={Investimentos}
            options={{
            tabBarIcon: ({size, color}) => (
                <Entypo name="bar-graph" size={size} color={color}></Entypo>
                )
            }}></Tab.Screen>
        </Tab.Navigator>
    )
}