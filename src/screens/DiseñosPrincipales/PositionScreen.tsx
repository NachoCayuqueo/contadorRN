import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaNegra} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaVerde} />
      <View style={styles.cajaRoja} />
    </View>
  );
};

const styles = StyleSheet.create({
  cajaMorada: {
    backgroundColor: '#5856d6',
    borderColor: 'white',
    borderWidth: 10,
    position: 'absolute',
    right: 10,
    width: 100,
    height: 100,
  },
  cajaNaranja: {
    backgroundColor: '#f0a23b',
    borderColor: 'white',
    borderWidth: 10,
    height: 100,
    width: 100,

    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  cajaNegra: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 10,
    ...StyleSheet.absoluteFillObject,
  },
  cajaRoja: {
    backgroundColor: 'red',
    borderColor: 'white',
    borderWidth: 10,
    height: 100,
    width: 100,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  container: {
    flex: 1,
  },
  cajaVerde: {
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 10,
    height: 100,
    width: 100,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
});
