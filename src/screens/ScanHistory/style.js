import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
    marginRight: 10,
  },
  timeStyles: {
    textAlign: 'center',
    backgroundColor: COLORS.primary,
    color: 'white',
    padding: 5,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
  },
});
