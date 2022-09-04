import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  onClickRegister() {
    const {email, password, confirm_password} = this.state;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // input validation
    if (reg.test(email) == false) {
      alert('Your email is invalid!');
    }else if (password == ""){
      alert('Pleae input your password!')
    }
    else if (password == '' && confirm_password == '') {
      alert('Please input your password');
    }else if (confirm_password != password) {
      alert('Your confirm password is incorrect');
    }else if (reg.test(email) === true && password == confirm_password) {
      alert(
        'Your password is: ' + this.state.email + `\n` + 'Your password is: ' + this.state.password,
      );
    } else {
      alert('Your Password is invalide');
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register Form</Text>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

         <TextInput
          value={this.state.confirm_password}
          onChangeText={(confirm_password) => this.setState({ confirm_password })}
          placeholder={'Confirm_Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity>
        <Button
          title={'Register'}
          onPress={this.onClickRegister.bind(this)}
          style={styles.button}
        />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
   button: {
      backgroundColor: 'red',
    },
  input: {
    width: 350,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 20,
  },
  title: {
    paddingBottom: 20,
    fontSize: 25,
    color: 'blue',
    
   }

});
