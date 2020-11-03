import { StyleSheet, Dimensions } from 'react-native';
import { metrics, colors } from '../../../core/themes';

export default StyleSheet.create({
  root: {
    flex: metrics.size1,
    backgroundColor: colors.white,
  },
  rootScroll: {
    flex: metrics.size1,
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
    fontSize: metrics.size20,
    fontWeight: "500",
    lineHeight: metrics.size23,
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
    fontSize: metrics.size12,
    lineHeight: metrics.size14,
    color: colors.gallery,
    marginBottom: metrics.size10,
  },
  contentContainer: {
    width: '100%',
    backgroundColor: colors.linkWater,
    borderTopRightRadius: metrics.size32,
    borderTopLeftRadius: metrics.size32,
    borderBottomRightRadius: metrics.size20,
    borderBottomLeftRadius: metrics.size20,
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
      width: metrics.size0,
      height: metrics.size1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: metrics.size2,
    marginRight: metrics.size15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  findHomeCardTitle: {
    marginBottom: metrics.size8,
    fontSize: metrics.size12,
    lineHeight: metrics.size14,
    fontWeight: '500',
    color: colors.blueZodiac
  },
  spaceEvenly: {
    justifyContent: 'space-evenly'
  },
  roomIcon: {
    marginRight: metrics.size4
  },
  chartIcon: {
    marginLeft: metrics.size26
  },
  dollarIcon: {
    marginRight: metrics.size11
  },
  chartDataRow: {
    flexDirection: 'row',
    marginLeft: metrics.size28,
  },
  viewMoreInfoButton: {
    color: '#46D0D9',
    fontSize: metrics.size8,
    lineHeight: metrics.size10,
    fontWeight: '300'
  },
  findHomeCardInner: {
    padding: metrics.size17
  },
  cardImage: {
    borderRadius: metrics.size20
  },
  cardContent: {
    height: metrics.size400,
    justifyContent: 'space-between',
    margin: metrics.size20
  },
  cardLocation: {
    height: metrics.size26,
    backgroundColor: 'rgba(255, 255, 255, 0.66)',
    borderRadius: metrics.size50,
    width: metrics.size130,
    margin: metrics.size26,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardDetailsContainer: {
    width: '100%',
    height: metrics.size103,
    backgroundColor: 'white',
    borderRadius: metrics.size20,
    paddingVertical: metrics.size15,
    paddingHorizontal: metrics.size27
  },
  cardDetailsTitle: {
    marginBottom: metrics.size9,
    fontSize: metrics.size20,
    color: '#143656'
  },
  cardDetailsUserPic: {
    borderRadius: metrics.size30,
    height: metrics.size30,
    width: metrics.size30
  },
  priceLabel: {
    fontSize: metrics.size20,
    lineHeight: metrics.size24,
    color: '#143656',
    fontWeight: '500'
  }
});
