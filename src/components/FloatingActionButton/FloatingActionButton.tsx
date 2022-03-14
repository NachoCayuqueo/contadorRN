import React from 'react';
import {
  Platform,
  Text,
  TouchableNativeFeedback,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

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
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.fabLocation,
          position === 'left' ? styles.left : styles.right,
        ]}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
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

  return Platform.OS === 'android' ? android() : ios();
};
