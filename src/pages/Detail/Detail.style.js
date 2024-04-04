import {StyleSheet, Text, View} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 300,
    width: 'auto',
    resizeMode: 'cover',
  },
  title_container: {
    borderBottomWidth: 1,
    borderColor: '#7a0e0e',
    padding: 5,
  },
  title: {
    fontSize: 30,
    color: '#7a0e0e',
    fontWeight: 'bold',
  },
  area: {
    color: '#7a0e0e',
    fontSize: 20,
  },
  instruction: {
    padding: 5,
  },
  opa: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
  },
  buton: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'red',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'red',
    color: 'white',
  },
});
