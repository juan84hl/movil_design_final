/*import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Hello World!!
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
*/


/*import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './src/screens/Styles'; // Importa los estilos desde el archivo styles.js

const backgroundImages = [
  require('./assets/capi0.png'),
  require('./assets/capi002.jpg'),
  require('./assets/capi03.png'),
  require('./assets/capi04.jpg'),
  require('./assets/mariom004.png'),
  require('./assets/mariom005.png'),
  require('./assets/mariom006.png'),
  require('./assets/mariom007.jpg'),
  require('./assets/mariom008.png'),
  require('./assets/mariom009.png'),
  // Agrega aquí más rutas de imágenes
];

const ContadorApp = () => {
  const [count, setCount] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleCount = (operation) => {
    if (operation === 'increment') {
      setCount(count + 1);
    } else if (operation === 'decrement') {
      setCount(count - 1);
    }

    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setBackgroundImage(backgroundImages[randomIndex]);
  };

  return (
    <View style={styles.container}>
      {backgroundImage && <View style={styles.backgroundImageContainer}><Image source={backgroundImage} style={styles.backgroundImage} /></View>}
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => handleCount('increment')} />
        <Button title="-" onPress={() => handleCount('decrement')} />
      </View>
    </View>
  );
};

export default ContadorApp;
*/

/*
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(null);

const handleIncrement = () => {
  setContador(contador + 1);

  // Obtener un número aleatorio entre 1 y 1000 para obtener una imagen aleatoria de la URL
  const randomImageNumber = Math.floor(Math.random() * 1000) + 1;
  setBackgroundImage({ uri: `https://picsum.photos/seed/${randomImageNumber}/200/300` });
};

const handleDecrement = () => {
  setContador(contador - 1);

  // Obtener un número aleatorio entre 1 y 1000 para obtener una imagen aleatoria de la URL
  const randomImageNumber = Math.floor(Math.random() * 1000) + 1;
  setBackgroundImage({ uri: `https://picsum.photos/seed/${randomImageNumber}/200/300` });
};

return (
  <View style={styles.container}>
    {backgroundImage && <FastImage source={backgroundImage} style={styles.backgroundImage} />}
    <Text style={styles.countText}>{contador}</Text>
    <View style={styles.buttonContainer}>
      <Button title="+" onPress={handleIncrement} />
      <Button title="-" onPress={handleDecrement} />
    </View>
  </View>
)};*/


import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';


const backgroundImages = [
  'https://picsum.photos/400/800',
  'https://picsum.photos/800/400',
  'https://picsum.photos/600/600',
  // Agrega aquí más URLs de imágenes
];

const Contador: React.FC = () => {
  const [contador, setContador] = useState<number>(0);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);


const handleIncrement = () => {
  setContador(contador + 1);

  // Obtener una URL aleatoria para seleccionar una imagen del arreglo
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  setBackgroundImage(backgroundImages[randomIndex]);
};

const handleDecrement = () => {
  setContador(contador - 1);

  // Obtener una URL aleatoria para seleccionar una imagen del arreglo
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  setBackgroundImage(backgroundImages[randomIndex]);
}};
