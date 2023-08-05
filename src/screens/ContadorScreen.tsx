import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';

const Contador: React.FC = () => {
  const [contador, setContador] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState<Asset | null>(null);

  const backgroundImages = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/300/200',
    'https://picsum.photos/250/250',
    // Agrega aquí más URLs de imágenes
  ];

  const handleIncrement = async () => {
    setContador(contador + 1);

    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const image = await Asset.fromURI(backgroundImages[randomIndex]);
    await image.downloadAsync();
    setBackgroundImage(image);
  };

  const handleDecrement = async () => {
    setContador(contador - 1);

    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const image = await Asset.fromURI(backgroundImages[randomIndex]);
    await image.downloadAsync();
    setBackgroundImage(image);
  };

  return (
    <View style={styles.container}>
      {backgroundImage && (
        <Image source={{ uri: backgroundImage.uri }} style={styles.backgroundImage} />
      )}
      <Text style={styles.countText}>{contador}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={handleIncrement} />
        <Button title="-" onPress={handleDecrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.8,
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default Contador;