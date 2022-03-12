import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FloatingActionButton} from '../components/FloatingActionButton';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});
