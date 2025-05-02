import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function SignUpScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>

      <Image
        source={require('../assets/images/sign_up.png')}
        style={styles.illustration}
      />

      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-google" size={20} color="#DB4437" />
        <Text style={styles.socialButtonText}>Sign Up With Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-facebook" size={20} color="#4267B2" />
        <Text style={styles.socialButtonText}>Sign Up With Facebook</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Type Here"
        placeholderTextColor="#d3cfff"
      />

      <Text style={styles.label}>Registration Code By Doctor</Text>
      <View style={styles.codeContainer}>
        {[0, 1, 2, 3, 4, 5].map((_, index) => (
          <TextInput
            key={index}
            style={styles.codeBox}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => router.push('/home')}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#837DE9',
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  illustration: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  label: {
    alignSelf: 'flex-start',
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    backgroundColor: '#9C94E3',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#fff',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '100%',
  },
  codeBox: {
    width: 40,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9C94E3',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#F0F0F0',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  submitText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});
