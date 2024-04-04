import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  image: {
    width: 60,
    height: 60,
    objectFit: 'contain',
  },
  title: {
    marginLeft: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
