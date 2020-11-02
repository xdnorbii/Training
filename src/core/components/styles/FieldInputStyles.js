import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes/';

export default StyleSheet.create({
  root:{
    width: '100%',
  },
  container: {
    backgroundColor:'white',
    height: metrics.size46,
    width: '80%',
    borderBottomWidth: metrics.size1,
    borderBottomColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: metrics.size20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius:10
  },
  textStyle: {
    marginLeft: metrics.size35,
    padding: metrics.size0,
    flex: metrics.size1,
    color: colors.black,
    fontSize: metrics.size14,
  },
  iconStyle: {
    marginRight: metrics.size15,
    height:17,
    width:17
  },
  label:{
    fontWeight:'400',
    fontSize: metrics.size14,
    lineHeight: metrics.size16,
    color: colors.chathamsBlue,
    marginBottom: metrics.size9
  },
});
