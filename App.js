import React from 'react';
import Home from './app/Screen/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Users from './app/Screen/Users';
import Single from './app/Screen/Single';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';

enableScreens();

const Tab = createBottomTabNavigator();
const Stack = createSharedElementStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarLabel: 'People',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="BottomTab" component={MyTabs} />
        <Stack.Screen name="Single" component={Single} 
          options={()=>({
            transitionSpec : {
              open : {animation:'timing',config:{duration:350}},
              close : {animation:'timing',config:{duration:350}}
            }
          })}
          sharedElementsConfig={(route)=>{
            const { item } = route.params;
            return [
              {
                id : item.image
              }
            ]
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
