import * as React from 'react';
import { Button, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './src/Home';
import ShowImage from './src/ShowImage';

const Stack=createNativeStackNavigator();

function HomeScreen() {
  return (
    
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='a' component={Home}/>
        
        <Stack.Screen name='ShowImage' component={ShowImage} options={{headerShown:false}}/>

      </Stack.Navigator>
    
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function TrashScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function StatisticsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
            
      <Drawer.Navigator initialRouteName="Galería">
        <Drawer.Screen name="Galería" component={HomeScreen} options={{headerStyle: {
      backgroundColor: '#829FC1'
    }}}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Trash" component={TrashScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Statistics" component={StatisticsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}