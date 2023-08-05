/*import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, } from 'react-native';
import WebView from 'react-native-webview';
import {styles} from './Styles'


const backgroundImages = [
  'https://picsum.photos/400/800',
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

export default Contador;*/