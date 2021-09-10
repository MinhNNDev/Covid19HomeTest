import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-evenly',
  },
  warningSdt: {
    color: COLORS.red,
  },
  inputVal: {
    marginHorizontal: 10,
  },
  lable: {
    height: 150,
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    fontSize: 20,
  },
  txtInformation: {
    margin: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primary,
    fontSize: 25,
  },
  confirm: {
    flexDirection: 'row',
    margin: 10,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  txtConform: {
    color: '#0C0E11',
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
  },
  txtRules: {
    color: '#0D68C3',
    fontWeight: 'bold',
  },
  btnNext: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    height: 50,
    backgroundColor: COLORS.primary,
    marginHorizontal: 80,
    marginTop: 50,
  },
  next: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnSkip: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginHorizontal: 80,
    // marginTop: 100,
  },
  skip: {
    fontSize: 18,
    color: COLORS.primary,
  },
});
