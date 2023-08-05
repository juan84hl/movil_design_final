import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const IMAGES_BASE_URL = 'https://picsum.photos/200/300?image=';

const ContadorApp: React.FC = () => {
  const [contador, setContador] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleIncrement = () => {
    setContador(contador + 1);
  };

  const handleDecrement = () => {
    setContador(contador - 1);
  };

  useEffect(() => {
    // Update background image whenever the counter changes
    const imageIndex = Math.floor(Math.random() * 1000); // Change this number to get different images
    setBackgroundImage(`${IMAGES_BASE_URL}${imageIndex}`);
  }, [contador]);

  return (
    <View style={styles.container}>
      {backgroundImage && (
        <ImageBackground source={{ uri: backgroundImage }} style={styles.backgroundImage}>
          <View style={styles.content}>
            <Text style={{
              fontSize: 45,
              textAlign: 'center'
            }}>
              Juan Miguel Hernandez 2019-0453
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleIncrement}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.countText}>{contador}</Text>
            <TouchableOpacity style={styles.button} onPress={handleDecrement}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    borderRadius: 50,
    margin: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ContadorApp;
