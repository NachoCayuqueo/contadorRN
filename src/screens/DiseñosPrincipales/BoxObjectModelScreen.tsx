import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

//sinipped stls
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },

  title: {
    borderWidth: 10,
    fontSize: 20,
    marginHorizontal: 10,
    paddingHorizontal: 100,
    paddingVertical: 20,
  },
});
