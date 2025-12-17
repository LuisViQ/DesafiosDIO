import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 200,
  },

  batLogo: {
    height: 180,
    resizeMode: 'contain',
    marginBottom: 100,
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
