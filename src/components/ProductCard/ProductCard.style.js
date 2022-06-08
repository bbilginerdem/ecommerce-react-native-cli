import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#e3e2e1',
    borderColor: '#b1b1b1',
    borderWidth: 1,
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: '#fff'
  },
  body_container: {
    flex: 1,
    padding: 7,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  price: {
    textAlign: 'right',
    fontSize: 17,
    fontStyle: 'italic',
  },
});
