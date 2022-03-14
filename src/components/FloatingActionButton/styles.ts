import {StyleSheet} from 'react-native';

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

export default styles;
