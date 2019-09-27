import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>App</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Home')}/>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  App: {
    screen: App,
  },
  Home: {
    screen: Home
  }

});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
