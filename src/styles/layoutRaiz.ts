import StyleSheet from 'react-native-media-query';
import { paletaWeb } from './global';

export const { styles } = StyleSheet.create({
  header:{
    backgroundColor: paletaWeb.roxoAlpha,
    padding: 10
  },
  footer:{
    backgroundColor: paletaWeb.roxoBeta,
    padding: 15,
    textAlign: 'center'
  }
}
);
