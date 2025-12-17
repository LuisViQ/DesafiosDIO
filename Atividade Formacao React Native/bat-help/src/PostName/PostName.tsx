import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import batLogo from '../../assets/batLogo.png';
import { styles } from './PostNameStyles';

type Props = {
  onBack?: () => void;
};

export function PostName({ onBack }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  function handleSubmit() {
    Alert.alert('Pedido enviado', 'As informações foram recebidas.');
    setName('');
    setPhone('');
    setLocation('');
    setNotes('');
  }

  return (
    <View style={styles.container}>
      <Image source={batLogo} style={styles.batLogo}/>

      <Text style={styles.title}>Preencha para acionar o Bat Sinal</Text>
      <Text style={styles.description}>
        Informe os dados principais para que possamos localizar você.
      </Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        placeholder="(DDD) 99999-9999"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>Localização atual</Text>
      <TextInput
        style={styles.input}
        placeholder="Rua, número, bairro"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.label}>Observação</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Algum detalhe importante?"
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        value={notes}
        onChangeText={setNotes}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      {onBack && (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
