import React from 'react';
import {Text, TouchableNativeFeedback, StyleSheet, View} from 'react-native';

interface Props {
  position?: 'left' | 'right';
  title: string;
  onPress: () => void;
}

export const FloatingActionButton = ({
  position = 'right',
  title,
  onPress,
}: Props) => {
  return (
    <View
      style={[
        styles.fabLocation,
        position === 'left' ? styles.left : styles.right,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#28425b', false, 30)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856d6',
    borderRadius: 100,
    justifyContent: 'center',
    height: 60,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    width: 60,
  },
  fabLocation: {
    bottom: 25,
    position: 'absolute',
  },
  fabText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  left: {
    left: 25,
  },
  right: {
    right: 25,
  },
});
