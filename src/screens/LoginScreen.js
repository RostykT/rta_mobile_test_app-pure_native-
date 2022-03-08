import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import {Button, Input} from 'react-native-elements';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const userAdmin = {
    email: 'roku@roku.com',
    password: 'roku',
  };
  const NavigateToHome = () => {
    navigation.navigate('Home');
  };

  const handleSubmit = () => {
    if (email === userAdmin.email && password === userAdmin.password) {
      NavigateToHome();
      console.log('sign in');
      setError(false);
    } else {
      setError(true);
      console.log('something went wrong');
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autofocus
          type="email"
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
          errorMessage={error && 'Incorrect password or email'}
          inputStyle={error && {color: 'red'}}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          secureTextEntry
          onChangeText={text => setPassword(text)}
          errorMessage={error && 'Incorrect password or email'}
        />
        <Button
          containerStyle={styles.button}
          title="Login"
          onPress={handleSubmit}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
