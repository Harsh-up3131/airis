import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreenComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7374C3',
  },
  text: {
    fontSize: 20,
  },
});

export default SplashScreenComponent;