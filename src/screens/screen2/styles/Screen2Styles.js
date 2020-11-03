import { StyleSheet, Dimensions } from 'react-native';
import { metrics, colors } from '../../../core/themes';

export default StyleSheet.create({
  root: {
    flex: metrics.size1,
    backgroundColor: colors.white,
  },
  rootScroll:{
    flex: 1,
  },
  backButton: {
    marginTop: metrics.size30,
    marginLeft: metrics.size37,
  },
  userView: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  userImage: {
    height: metrics.size75,
    width: metrics.size75,
    marginTop: metrics.size37,
    marginBottom: metrics.size37,
    borderRadius: metrics.size75,
  },
  userDetails: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 23,
    color: colors.chathamsBlue,
    marginBottom: metrics.size5,
  },
  locationText: {
    fontSize: metrics.size11,
    fontWeight: '300',
    lineHeight: metrics.size13,
    color: colors.chathamsBlue,
  },
  row: {
    flexDirection: 'row'
  },
  nrVotes: {
    fontSize: 12,
    lineHeight: 14,
    color: colors.gallery,
    marginBottom: metrics.size10,
  },
  contentContainer: {
    width: '100%',
    backgroundColor: colors.linkWater,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  findHomeView: {
    marginLeft: metrics.size18,
    marginTop: metrics.size32
  },
  findHomeText: {
    fontSize: metrics.size20,
    lineHeight: metrics.size24,
    fontWeight: '500',
    color: colors.blueZodiac
  },
  findHomeScrollView: {
    marginTop: metrics.size8,
    marginBottom: metrics.size24
  },
  findHomeCard: {
    backgroundColor: colors.white,
    height: metrics.size125,
    width: metrics.size230,
    borderRadius: metrics.size10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginRight: metrics.size15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  findHomeCardTitle:{
    marginBottom: metrics.size8,
    fontSize: metrics.size12,
    lineHeight: metrics.size14,
    fontWeight: '500',
    color: colors.blueZodiac
  },
  spaceEvenly:{
    justifyContent:'space-evenly'
  }
});
