import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getApps, initializeApp } from "firebase/app";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Add_edit_Car from './components/Add_edit_Car';
import CarDetails from './components/CarDetails';
import CarList from './components/CarList';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCno9TvjNJSfFpSLphe0IEEv8R8ykXor1s",
    authDomain: "oevelse4-c59b0.firebaseapp.com",
    databaseURL: "https://oevelse4-c59b0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "oevelse4-c59b0",
    storageBucket: "oevelse4-c59b0.appspot.com",
    messagingSenderId: "515052009733",
    appId: "1:515052009733:web:eb3ad4a3fbf146432adf6c",
    measurementId: "G-SBV2N6EH87"
  };

  // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
  // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
  if (getApps().length < 1) {
    initializeApp(firebaseConfig);
    console.log("Firebase On!");
    // Initialize other firebase products here
  }
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const StackNavigation = () => {
    return(
        <Stack.Navigator>
          <Stack.Screen name={'Car List'} component={CarList}/>
          <Stack.Screen name={'Car Details'} component={CarDetails}/>
          <Stack.Screen name={'Edit Car'} component={Add_edit_Car}/>
        </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Home'} component={StackNavigation} options={{tabBarIcon: () => ( <Ionicons name="home" size={20} />),headerShown:null}}/>
        <Tab.Screen name={'Add'} component={Add_edit_Car} options={{tabBarIcon: () => ( <Ionicons name="add" size={20} />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
