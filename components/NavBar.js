import React from 'react';
import Home from './Home';
import Expenses from './Expenses';
import { StyleSheet, Text, View, Button } from 'react-native';

class NavBar extends React.Component {
  render(){
    console.log('props from Navbar', this.props);
    return(
      <View>
        <Text> Profile </Text>
        <Button title={'Logout'} onPress={() => props.navigation.push('Home')}/>
        <Button title={'My expenses'} onPress={() => props.navigation.push('Expenses')}/>
      </View>

    )
  }
}

export default NavBar
