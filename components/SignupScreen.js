import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo1.jpg')} style={styles.logo} />
      <Text style={styles.title}>Sign Up</Text>
      
      <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#FFFFFF"/>
      <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#FFFFFF"/>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#FFFFFF"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#FFFFFF"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#FFFFFF"
        secureTextEntry
      />
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('PassRecovScreen')}  // Navigate to PasswordRecoveryScreen
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('PassRecovScreen')}>
        <Text style={styles.linkText}>Forgot your password? Click Here</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    color: '#ffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    color: '#ffff', 
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#000',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 50,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  buttonText: {
    color: '#ffff',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#FFFFFF',
    marginTop: 20,
  },
});

export default SignUpScreen;
