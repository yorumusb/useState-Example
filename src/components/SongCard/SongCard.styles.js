/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  year: {
    fontSize: 12,
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 5,
  },
  soldout_title: {
    color: 'red',
    fontSize: 12,
  },
  content_container: {
    flexDirection: 'row',
  },
});
