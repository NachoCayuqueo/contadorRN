import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.cajaMorada, width: width * 0.6}} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        Dimensiones: W={width},H={height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: 200,
  },
  cajaMorada: {
    backgroundColor: '#5856d6',
    // width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#f0a23b',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
