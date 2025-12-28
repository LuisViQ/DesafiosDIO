import React from "react";
import { Button, TextInput, View } from "react-native";

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
    <View>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={onChangeUsername}
      />
      <View style={styles.passwordRow}>
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={isPasswordHidden}
          value={password}
          onChangeText={onChangePassword}
        />
        <Button
          title={isPasswordHidden ? "Esconder Senha" : "Ver Senha"}
          onPress={onTogglePasswordVisibility}
        />
      </View>
      <Button title="Entrar" onPress={onSubmit} />
    </View>
  );
}
