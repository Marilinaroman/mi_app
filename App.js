import { Text, TextInput, View, Button} from 'react-native';
import {styles} from './style/style'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Ingrese un dato' style={styles.input}/>
        <Button title='agregar'/>
      </View>
    </View>
  );
}


