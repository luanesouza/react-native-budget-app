import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Expenses from './components/Expenses';

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>App</Text>
        <LoginForm />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Home')}/>
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
  },
  Expenses: {
    screen: Expenses,

  }

});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
