import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 24,
  },

  batLogo: {
    height: 120,
    resizeMode: 'contain',
    marginBottom: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 24,
  },

  label: {
    width: '100%',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },

  multiline: {
    height: 96,
  },

  button: {
    width: '100%',
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  backButton: {
    marginTop: 16,
  },

  backText: {
    color: '#555',
    fontWeight: '600',
  },
});
