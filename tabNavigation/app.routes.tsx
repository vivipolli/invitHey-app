import React from 'react'; 

import { MaterialIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const { Navigator, Screen } = createBottomTabNavigator();

import { Onboarding } from '../src/pages';
import { SignIn } from '../src/pages';
import { SignUp } from '../src/pages';
import { Welcome } from '../src/pages';

import { Header } from '../src/components/Header';


export function AppRoutes() {

    return (
        <Navigator
            screenOptions={{
                tabBarInactiveTintColor: '#898D9A',
                tabBarActiveTintColor: '#FF7527',
                tabBarShowLabel: false
            }}
        >
            <Screen 
                name='Onboarding'
                component={Onboarding}
                options={{
                    headerShown: false,
                    tabBarIcon: ( ( { size, color } ) => (
                        <MaterialIcons 
                            name='home'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen 
                
                name='SignIn'
                component={SignIn}
                options={{
                    header: props => <Header page='Meus Eventos' />,
                    tabBarIcon: ( ( { size, color } ) => (
                        <MaterialIcons 
                            name='event'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen 
                name='SignUp'
                component={SignUp}
                options={{
                    header: props => <Header page='Criar Evento' />,
                    tabBarIcon: ( ( { size, color } ) => (
                        <MaterialIcons 
                            name='add-circle-outline'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen
                name='Welcome' 
                component={Welcome}
                options={{
                    header: props => <Header page='Meu Perfil' />,
                    tabBarIcon: ( ( { size, color } ) => (
                        <MaterialIcons 
                            name='person-outline'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </Navigator>
    );
}