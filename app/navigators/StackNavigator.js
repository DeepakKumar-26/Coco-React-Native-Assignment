import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/Users';
import UserDetails from '../screens/UserDetails';

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="users"
        component={Users}
        options={{title:'Users'}}
      />
      <Stack.Screen
        name="userDetails"
        component={UserDetails}
        options={({ route }) => ({ title: route.params.user.name })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
