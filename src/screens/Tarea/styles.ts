import {StyleSheet} from 'react-native';

export const basicStyles = StyleSheet.create({
  container: {backgroundColor: '#28425b', flex: 1},
  box1: {backgroundColor: '#5856d6', borderColor: 'white', borderWidth: 10},
  box2: {backgroundColor: '#f0a23b', borderColor: 'white', borderWidth: 10},
  box3: {backgroundColor: '#28c4d9', borderColor: 'white', borderWidth: 10},
});

export const container = StyleSheet.create({
  homework2: {
    justifyContent: 'center',
  },
  homework4: {
    justifyContent: 'space-between',
  },
  homework5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homework7: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  homework10: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const box1 = StyleSheet.create({
  homework1: {
    height: 100,
    width: 100,
  },
  homework3: {
    alignSelf: 'flex-end',
    height: 100,
    width: 100,
  },
  homework4: {
    alignSelf: 'flex-end',
    height: 100,
    width: 100,
  },
  homework5: {
    width: 100,
  },
  homework6: {
    flex: 2,
  },
  homework9: {
    height: 100,
    top: 100,
    width: 100,
  },
});

export const box2 = StyleSheet.create({
  homework1: {
    flex: 1,
    width: 100,
  },
  homework2: {
    height: 100,
    width: 100,
  },
  homework4: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
  homework5: {
    width: 100,
  },
  homework6: {
    flex: 2,
  },
  homework8: {
    height: 100,
    width: 100,
    left: 100,
  },
  homework10: {
    height: 100,
    width: 100,
    top: 50,
  },
});

export const box3 = StyleSheet.create({
  homework1: {
    height: 100,
    width: 100,
  },
  homework2: {
    height: 100,
  },
  homework3: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
  homework4: {
    height: 100,
    width: 100,
  },
  homework5: {
    width: 100,
  },
  homework6: {
    flex: 4,
  },
});
