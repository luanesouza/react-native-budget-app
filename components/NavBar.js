import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class NavBar extends React.Component {
  render(){
    console.log('props from Navbar', this.props);
    return(
      <View>
        <Text> Test </Text>
      </View>

    )
  }
}

export default NavBar
