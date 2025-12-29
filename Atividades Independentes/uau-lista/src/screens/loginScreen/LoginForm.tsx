import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { styles } from "./styles";

type LoginFormProps = {
  username: string;
  password: string;
  isPasswordHidden: boolean;
  onChangeUsername: (value: string) => void;
  onChangePassword: (value: string) => void;
  onTogglePasswordVisibility: () => void;
  onSubmit: () => void;
};

export function LoginForm({
  username,
  password,
  isPasswordHidden,
  onChangeUsername,
  onChangePassword,
  onTogglePasswordVisibility,
  onSubmit,
}: LoginFormProps) {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Usuario</Text>
      <TextInput
        placeholder="Digite seu usuario"
        placeholderTextColor="#a18978"
        style={styles.input}
        value={username}
        onChangeText={onChangeUsername}
      />
      <Text style={styles.label}>Senha</Text>
      <View style={styles.passwordRow}>
        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#a18978"
          style={styles.input}
          secureTextEntry={isPasswordHidden}
          value={password}
          onChangeText={onChangePassword}
        />
        <Pressable
          style={styles.toggleButton}
          onPress={onTogglePasswordVisibility}
        >
          <Text style={styles.toggleButtonText}>
            {isPasswordHidden ? "Mostrar" : "Ocultar"}
          </Text>
        </Pressable>
      </View>
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitButtonText}>Entrar</Text>
      </Pressable>
    </View>
  );
}
