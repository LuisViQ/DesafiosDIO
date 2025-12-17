import { Image, Text, TouchableOpacity, View } from 'react-native';
import batLogo from '../../assets/batLogo.png';
import { styles } from "./Styles"

type Props = {
  onActivate: () => void;
};

export default function ActiveBatSinal ({ onActivate }: Props) {

  return (
    <View style={styles.container}>
      <Image source={batLogo} style={styles.batLogo} />

      <TouchableOpacity
        style={styles.button}
        onPress={onActivate}>
        <Text style={styles.buttonText}>Ativar bat sinal</Text>
      </TouchableOpacity>
    </View>
  );
}

