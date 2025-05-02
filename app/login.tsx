import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Image
        source={require('../assets/images/hello.png')} // Replace with your image
        style={styles.image}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('../assets/images/google.png')} style={styles.icon} />
        <Text style={styles.socialText}>Login With Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('../assets/images/facebook.png')} style={styles.icon} />
        <Text style={styles.socialText}>Login With Facebook</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="User Name"
        placeholderTextColor="#aaa"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={secure}
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Ionicons
            name={secure ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#eee"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.forgotText}>Forgot Password</Text>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C7AE6',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 40,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '90%',
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    width: '90%',
    backgroundColor: '#A29BFE',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    color: '#fff',
  },
  passwordContainer: {
    width: '90%',
    backgroundColor: '#A29BFE',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    color: '#fff',
  },
  forgotText: {
    color: '#fff',
    alignSelf: 'flex-end',
    marginTop: 8,
    marginRight: 20,
  },
  submitButton: {
    backgroundColor: '#fff',
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  submitText: {
    color: '#8C7AE6',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
