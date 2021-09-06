import {StyleSheet} from 'react-native'
import THEME from '../../constants/theme'
export const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginTop: 20
  },
  btnItem: {
    backgroundColor: THEME.COLORS.white,
    height: 60,
    width: THEME.SIZES.width - 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20
  },
  textBtnItem: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.COLORS.primary,
  },
  iconBtnItem: {
    backgroundColor: THEME.COLORS.primary,
    padding: 18,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
});

