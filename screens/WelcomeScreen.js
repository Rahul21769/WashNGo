import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wash n Go</Text>
      <Text style={styles.subtitle}>Sparkle & Shine Transform Your Drive with Every Wash!</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.buttonText}>Let's Start</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signInText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E6F7F7',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4AB8B1',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#4AB8B1',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    color: '#4AB8B1',
    fontSize: 16,
  },
});
 