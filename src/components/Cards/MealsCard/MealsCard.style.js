import {Dimensions, StyleSheet} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    margin: 10,
    position: 'relative',
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: 200,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 190,
    resizeMode: 'cover',
    backgroundColor: 'white',
    position: 'absolute',
  },
  title: {
    fontSize: 30,
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'black',
    opacity: 0.4,
    color: 'white',
  },
});
