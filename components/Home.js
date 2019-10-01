import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import A from 'react-native-a';
import LoginForm from './LoginForm';
import NavBar from './NavBar';

const Home = (props) => {
  console.log('Props from home', this);
  console.log('Props from home', props);

  return(
    <View>
      <NavBar />
      <Button
        title="Go to Home"
        onPress={() => props.navigation.push('NavBar')}/>
    </View>
  )
}

const AppContainer = createAppContainer(Home);
export default AppContainer;
// export default Home;
