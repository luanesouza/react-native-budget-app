import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import A from 'react-native-a';
import NavBar from './NavBar';


class LoginForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  onLogin = () => {
    const { username, password } = this.state;
    console.log('loggedin');
    console.log(this.state);

  }
  render(){
    return(
      <View style={styles.view}>
        <Text> Login </Text>
        <TextInput onChangeText={(email) => this.setState({ email })} placeholder="email" style={styles.input} />
        <TextInput onChangeText={(username) => this.setState({ username })} placeholder="username" style={styles.input} />
        <TextInput onChangeText={(password) => this.setState({ password })} placeholder="password" style={styles.input} />
        <Button onPress={this.onLogin} title="Login" style={styles.button}> </Button>

        <A href="./components/NavBar"> Don't have an account? Signup! </A>
      </View>
    )

  }
}
const styles = StyleSheet.create({
  view: {
    width: 170,
    alignItems: 'center',
    margin: 3
  },
  input: {
    width: 170,
    fontSize: 13,
    margin: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    width: 120,
    marginLeft: 0,
  },

})

export default LoginForm;
