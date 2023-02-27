import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Users from './app/screens/Users';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './app/navigators/StackNavigator';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
 

  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
