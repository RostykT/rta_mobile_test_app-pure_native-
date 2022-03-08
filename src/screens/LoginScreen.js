import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import {Button, Input} from 'react-native-elements';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {};

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autofocus
          type="email"
          value={email}
          onChange={text => setEmail(text)}
          autoCapitalize="none"
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          secureTextEntry
          onChange={text => setPassword(text)}
        />
        <Button containerStyle={styles.button} title="Login" onPress={signIn} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 200,
  },
  inputContainer: {
    width: 300,
    alignItems: 'center',
  },
  button: {
    width: 300,
    marginTop: 10,
  },
});
