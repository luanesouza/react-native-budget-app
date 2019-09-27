import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import A from 'react-native-a';
import LoginForm from './LoginForm';
import NavBar from './NavBar';

const Home = () => {
  return(
    <View>
    <NavBar />
      <Text> HomePage </Text>
      <LoginForm />
    </View>
  )
}

export default Home;
