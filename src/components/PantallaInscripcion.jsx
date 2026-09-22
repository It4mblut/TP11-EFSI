import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator} from 'react-native';
import { useForm } from 'react-hook-form';
import { CampoForm } from './CampoForm';
import { TipoEntrada } from './TipoEntrada';
import { TicketConfirmacion } from './TicketConfirmacion';

export const PantallaInscripcion = () => {
  const [datosInscripto, setDatosInscripto] = useState(null);
  const [loading, setLoading] = useState(false);

  const {control, handleSubmit, reset, formState: { errors, isValid }} = useForm({
    mode: 'onChange',
    defaultValues: { nombreCompleto: '', email: '', edad: '', tipoEntrada: '', telefono: ''},
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setDatosInscripto(data);
      setLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setDatosInscripto(null);
    reset({nombreCompleto: '', email: '', edad: '', tipoEntrada: '', telefono: ''});
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Formulario de Inscripcion</Text>

        {datosInscripto ? (
          <TicketConfirmacion datos={datosInscripto} onReset={handleReset} />
        ) : (
          <View style={styles.formContainer}>
            <CampoForm control={control} errors={errors} name="nombreCompleto" label="Nombre Completo"
              rules={{
                required: 'Ingresa tu nombre completo',
                validate: (v) => v.trim().length >= 3 || 'Ingresa tu nombre completo',
              }}
            />

            <CampoForm
              control={control}
              errors={errors}
              name="email"
              label="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              rules={{
                required: 'Ingresa un email valido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Ingresa un email valido',
                },
              }}
            />

            <CampoForm
              control={control}
              errors={errors}
              name="edad"
              label="Edad"
              keyboardType="numeric"
              rules={{
                required: 'La edad tiene que ser mayor a 12',
                validate: (v) => {
                  const val = parseInt(v, 10);
                  return (val >= 12 && val <= 99) || 'La edad tiene que ser mayor a 12';
                },
              }}
            />

            <TipoEntrada
              control={control}
              errors={errors}
              rules={{ required: 'Elegi un tipo de entrada' }}
            />

            <CampoForm
              control={control}
              errors={errors}
              name="telefono"
              label="Telefono (opcional)"
              keyboardType="phone-pad"
              rules={{
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Solo se permiten numeros',
                },
              }}
            />

            <TouchableOpacity
              style={[
                styles.submitButton,
                (!isValid || loading) && styles.disabledButton,
              ]}
              disabled={!isValid || loading}
              onPress={handleSubmit(onSubmit)}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.submitText}>Confirmar inscripcion</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#f4f6f7',
    flexGrow: 1
},
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333'
},
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc'
},
  submitButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
},
  disabledButton: {
    backgroundColor: '#ccc'
},
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
},
});