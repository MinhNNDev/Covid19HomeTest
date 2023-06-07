import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  btnGetPosition: {
    width: SIZES.width - 20,
    height: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
  },
  txtGetPosition: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  positionItem: {
    width: SIZES.width - 20,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
