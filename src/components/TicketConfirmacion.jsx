import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const TicketConfirmacion = ({ datos, onReset }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>TICKET DE CONFIRMACION</Text>
      
      <View style={styles.row}>
        <Text style={styles.label}>Nombre completo:</Text>
        <Text style={styles.value}>{datos.nombreCompleto}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{datos.email}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Edad:</Text>
        <Text style={styles.value}>{datos.edad}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Tipo de entrada:</Text>
        <Text style={[styles.value, styles.badge]}>{datos.tipoEntrada.toUpperCase()}</Text>
      </View>

      {datos.telefono ? (
        <View style={styles.row}>
          <Text style={styles.label}>Telefono:</Text>
          <Text style={styles.value}>{datos.telefono}</Text>
        </View>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={onReset}>
        <Text style={styles.buttonText}>Volver a inscribir a otra persona</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  label: {
    color: '#666',
    fontWeight: 'bold'
  },
  value: {
    fontSize: 16,
    color: '#333'
  },
  badge: {
    color: '#3498db',
    fontWeight: 'bold'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
},
});