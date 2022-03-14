import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {FloatingActionButton} from '../../components/FloatingActionButton/FloatingActionButton';
import styles from './styles';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>

      <FloatingActionButton
        position="left"
        title="-1"
        onPress={() => setContador(contador - 1)}
      />
      <FloatingActionButton
        position="right"
        title="+1"
        onPress={() => setContador(contador + 1)}
      />
    </View>
  );
};
