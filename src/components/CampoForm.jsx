import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';

export const CampoForm = ({ control, errors, name, label, rules, ...rest }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={[styles.input, errors[name] && styles.inputError]} onBlur={onBlur} onChangeText={onChange} value={value} {...rest}/>
        )}
      />
      {errors[name] && <Text style={styles.errorText}>{errors[name].message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
},
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
},
  inputError: {
    borderColor: '#e74c3c'
},
  errorText: {
    color: '#e74c3c', fontSize: 12, marginTop: 4
},
});