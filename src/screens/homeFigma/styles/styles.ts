import {StyleSheet, Dimensions} from 'react-native';
import {metrics, colors} from '../../../core/themes';
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  root: {
    flex: metrics.size1,
    backgroundColor: colors.zircon,
  },
  rootScroll: {
    flex: metrics.size1,
  },

  userView: {
    justifyContent: 'space-between',
    marginHorizontal: metrics.size28,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.zircon,
    marginTop: metrics.size70
  },
  userImage: {
    height: metrics.size40,
    width: metrics.size40,
    borderRadius: metrics.size75,
  },
  locationText: {
    marginLeft: normalize(metrics.size9),
    fontSize: metrics.size12,
    lineHeight: metrics.size14,
    color: colors.cyanblue,
  },
  arrowDownIcon: {
    marginLeft: metrics.size6,
    color: colors.cyanblue,
  },
  nrVotes: {
    fontSize: metrics.size12,
    lineHeight: metrics.size14,
    color: colors.gallery,
    marginBottom: metrics.size10,
  },
  contentContainer: {
    width: '100%',
    backgroundColor: colors.zircon,
    borderTopRightRadius: metrics.size32,
    borderTopLeftRadius: metrics.size32,
    borderBottomRightRadius: metrics.size20,
    borderBottomLeftRadius: metrics.size20,
  },
  nameText: {
    fontSize: metrics.size20,
    lineHeight: metrics.size24,
    marginLeft: metrics.size28,
    marginTop: metrics.size27,
    color: 'grey'
  },
  startLookingText: {
    fontSize: metrics.size20,
    lineHeight: metrics.size24,
    marginLeft: metrics.size28,
    color: colors.blueZodiac,
    fontWeight: 'bold'
  },
  searchContainer:{
    flex:metrics.size1,
    justifyContent:'center',
    alignItems:'center',
    marginTop: metrics.size30,
  },
  buttonsContainer:{
    flexDirection: 'row',
    marginHorizontal: metrics.size10
  },
  selectedButtonContainer:{
    width: metrics.size80,
    height: metrics.size110,
    backgroundColor: colors.turquoise,
    marginHorizontal: metrics.size10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.size10,
    shadowColor: "#000",
    shadowOffset: {
      width: metrics.size0,
      height: metrics.size1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: metrics.size3,
  },
  buttonContainer:{
    height: metrics.size75,
    width: metrics.size72,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: metrics.size10,
    borderRadius: metrics.size10,
    shadowColor: "#000",
    shadowOffset: {
      width: metrics.size0,
      height: metrics.size1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: metrics.size3,
  },
  selectedButton:{
    height: metrics.size41,
    width: metrics.size36
  },
  buttonText:{
    fontSize: metrics.size16,
    lineHeight: metrics.size19,
    fontWeight: '500',
    color: colors.white,
    marginTop: metrics.size17
  },
  button:{
    height: metrics.size30,
    width: metrics.size30,
  },
  
 
 
  
  
  
});
