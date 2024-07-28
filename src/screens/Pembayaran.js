import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const PaymentScreen = () => {
  const handlePayment = () => {
    Alert.alert('Payment Successful', 'Your payment has been processed successfully.');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Payment Screen</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name on Card</Text>
        <TextInput style={styles.input} placeholder="John Doe" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput style={styles.input} placeholder="1234 5678 9012 3456" keyboardType="numeric" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Expiry Date</Text>
        <TextInput style={styles.input} placeholder="MM/YY" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CVV</Text>
        <TextInput style={styles.input} placeholder="123" keyboardType="numeric" secureTextEntry />
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Make Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#4c669f',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
