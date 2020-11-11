import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes/';

export default StyleSheet.create({
  container: {
    marginHorizontal: metrics.size20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: metrics.size19,
    paddingVertical: metrics.size17,
    paddingHorizontal: metrics.size24,
    borderRadius: metrics.size10,
    shadowColor: "#000",
    shadowOffset: {
      width: metrics.size0,
      height: metrics.size2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: metrics.size5,
  },
  textStyle: {
    padding: metrics.size0,
    flex: metrics.size1,
    color: colors.black,
    fontSize: metrics.size14,
  },
  iconStyle: {
    marginRight: metrics.size15,
  },
});
