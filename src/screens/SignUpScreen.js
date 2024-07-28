import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>SMAKE</Text>
      </View>
      <Text style={styles.header}>Sign Up</Text>
      <Formik
        initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={Yup.object({
          fullName: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        })}
        onSubmit={(values) => {
          // handle sign up
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Image source={require('../assets/images/user.png')} style={styles.icon} />
              <TextInput
                placeholder="Full Name"
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
                style={styles.input}
                placeholderTextColor="#666"
              />
            </View>
            {touched.fullName && errors.fullName ? <Text style={styles.error}>{errors.fullName}</Text> : null}
            <View style={styles.inputContainer}>
              <Image source={require('../assets/images/email.png')} style={styles.icon} />
              <TextInput
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.input}
                placeholderTextColor="#666"
              />
            </View>
            {touched.email && errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
            <View style={styles.passwordContainer}>
              <Image source={require('../assets/images/key.png')} style={styles.icon} />
              <TextInput
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                style={styles.inputPassword}
                placeholderTextColor="#666"
              />
              <TouchableOpacity style={styles.eyeIcon}>
                <Image source={require('../assets/images/eye.png')} style={styles.eyeIconImage} />
              </TouchableOpacity>
            </View>
            {touched.password && errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
            <View style={styles.passwordContainer}>
              <Image source={require('../assets/images/key.png')} style={styles.icon} />
              <TextInput
                placeholder="Confirm Password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry
                style={styles.inputPassword}
                placeholderTextColor="#666"
              />
              <TouchableOpacity style={styles.eyeIcon}>
                <Image source={require('../assets/images/eye.png')} style={styles.eyeIconImage} />
              </TouchableOpacity>
            </View>
            {touched.confirmPassword && errors.confirmPassword ? <Text style={styles.error}>{errors.confirmPassword}</Text> : null}
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 90,
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003087',
    marginLeft: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003087',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: '#003087',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: '#003087',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  inputPassword: {
    flex: 1,
    color: '#000',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  eyeIcon: {
    width: 25,
    height: 25,
  },
  eyeIconImage: {
    width: '100%',
    height: '100%',
  },
  signUpButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#28a745',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    fontSize: 16,
    color: '#000',
  },
  signInLink: {
    color: '#003087',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
  },
});

export default SignUpScreen;
