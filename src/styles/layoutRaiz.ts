import StyleSheet from 'react-native-media-query';
import { paletaWeb } from './global';

export const { styles } = StyleSheet.create({
  header:{
    backgroundColor: paletaWeb.roxoAlpha,
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    boxShadow: "0px 7px 15px 0px rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
  },
  footer:{
    backgroundColor: paletaWeb.roxoBeta,
    padding: 15,
    textAlign: 'center'
  }
}
);
