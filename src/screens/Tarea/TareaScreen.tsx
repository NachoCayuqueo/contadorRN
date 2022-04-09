import React from 'react';
import {View} from 'react-native';
import {basicStyles, box1, box2, box3, container} from './styles';

/**estilos de las tareas:
- 1) box1:(1) - box2:(1) - box3:(1)
- 2) container:(2) - box1:(1) - box2:(2) - box3:(2)
- 3) container:(2) - box1:(3) - box2:(2) - box3:(3)
- 4) container:(4) - box1:(4) - box2:(4) - box3:(4)
- 5) container:(5) - box1:(5) - box2:(5) - box3:(5)
- 6) box1:(6) - box2:(6) - box3:(6)
- 7) container:(7) - box1:(1) - box2:(2) - box3:(1)
- 8) container:(7) - box1:(1) - box2:(8) - box3:(1)
- 9) container:(7) - box1:(9) - box2:(8) - box3:(1)
- 10) container:(10) - box1:(1) - box2:(10) - box3:(1)
**/

export const TareaScreen = () => {
  return (
    <View style={[basicStyles.container, container.homework10]}>
      <View style={[basicStyles.box1, box1.homework1]} />
      <View style={[basicStyles.box2, box2.homework10]} />
      <View style={[basicStyles.box3, box3.homework1]} />
    </View>
  );
};
