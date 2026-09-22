import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';

export const TipoEntrada = ({ control, errors, rules }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de entrada</Text>
      <Controller control={control} name="tipoEntrada" rules={rules}
        render={({ field: { onChange, value } }) => (
          <View style={styles.optionsContainer}>
            {['general', 'vip'].map((option) => (
              <TouchableOpacity key={option}
                style={[
                  styles.optionButton, value === option && styles.optionSelected,
                ]}
                onPress={() => onChange(option)}
              >
                <Text style={[styles.optionText, value === option && styles.optionTextSelected]}>
                  {option.toUpperCase()}
                </Text>
                
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
      {errors.tipoEntrada && <Text style={styles.errorText}>{errors.tipoEntrada.message}</Text>}
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
  optionsContainer: {
    flexDirection: 'row',
    gap: 10
},
  optionButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
},
  optionSelected: {
    backgroundColor: '#3498db',
    borderColor: '#3498db'
},
  optionText: {
    fontWeight: 'bold',
    color: '#555'
},
  optionTextSelected: {
    color: '#fff'
},
  errorText: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 4
},
});