import {StyleSheet} from 'react-native';
import {colors, fonts, metrics} from '../../../core/themes/';
import {Dimensions} from 'react-native';
import normalize from 'react-native-normalize';

const {width} = Dimensions.get('window');
const height = width * 1;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    backgroundColor: '#F8FBFF',
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: normalize(309),
    alignSelf: 'center',
  },
  dot: {
    color: 'white',
    fontSize: metrics.size10,
    marginRight: metrics.size5,
  },
  activeDot: {
    color: 'rgba(70,208,217,1)',
    fontSize: metrics.size10,
    marginRight: metrics.size5,
  },
  whiteCircle: {
    backgroundColor: 'white',
    height: metrics.size42,
    width: metrics.size42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  headerButtons: {
    marginTop: metrics.size81,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.size37,
  },
  availableContainer: {
    width: metrics.size119,
    height: metrics.size31,
    backgroundColor: 'rgba(108,199,117,1)',
    borderRadius: metrics.size50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  availableText: {
    color: 'white',
  },
  cardContainer: {
    flex: metrics.size1,
    backgroundColor: '#F8FBFF',
    marginTop: metrics.size230,
    borderTopLeftRadius: metrics.size32,
    borderTopRightRadius: metrics.size32,
  },
  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metrics.size39,
    marginHorizontal: metrics.size26,
  },

  location: {
    flexDirection: 'row',
  },
  locationText: {
    color: colors.cyanblue,
    fontSize: metrics.size11,
    lineHeight: metrics.size13,
    marginLeft: metrics.size4,
  },
  specialHouseText: {
    fontSize: metrics.size26,
    lineHeight: metrics.size31,
    color: colors.cyanblue,
    marginTop: metrics.size6,
    fontWeight: 'bold',
    letterSpacing: metrics.size0_3Negative,
  },
  profilePic: {
    borderRadius: metrics.size20,
  },
  roomOptions: {
    flexDirection: 'row',
    marginLeft: metrics.size26,
    marginTop: metrics.size11,
  },
  infoText: {
    fontSize: metrics.size13,
    lineHeight: metrics.size15,
    letterSpacing: metrics.size0_3Negative,
    color: 'rgba(20, 54, 86, 0.4)',
    alignSelf: 'center',
  },
  infoDot: {
    fontSize: metrics.size8,
    marginHorizontal: metrics.size6,
    color: 'rgba(70,208,217,1)',
    alignSelf: 'center',
  },
  utilitiesContainer: {
    marginTop: metrics.size20,
    marginLeft: metrics.size26,
    flexDirection: 'row',
  },
  utilityItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    fontSize: metrics.size19,
    lineHeight: metrics.size23,
    letterSpacing: metrics.size0_3Negative,
    color: 'rgba(138,155,171,1)',
    marginLeft: metrics.size7,
  },
  utilityIcon: {
    marginLeft: metrics.size43,
  },
  actionsContainer: {
    height: metrics.size59,
    marginTop: metrics.size26,
    borderTopWidth: metrics.size2,
    borderBottomWidth: metrics.size2,
    borderColor: 'rgba(20, 54, 86, 0.05)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoIcon: {
    width: metrics.size63,
    height: metrics.size38,
    marginLeft: metrics.size52,
  },
  offersText: {
    fontSize: metrics.size12,
    lineHeight: metrics.size14,
    letterSpacing: metrics.size0_3Negative,
    color: '#D3DBE2',
  },
  offersIcon: {
    alignSelf: 'center',
  },
  endItems: {
    marginRight: metrics.size52,
  },
  commentsIcon: {
    width: metrics.size63,
    height: metrics.size38,
  },
  descriptionContainer: {
    marginTop: metrics.size27,
    marginHorizontal: metrics.size26,
    marginBottom: metrics.size28,
  },
  descriptionText: {
    fontSize: metrics.size20,
    lineHeight: metrics.size24,
    letterSpacing: metrics.size0_3Negative,
    color: '#143656',
    fontWeight: 'bold',
  },
  loremText: {
    marginTop: metrics.size15,
    fontSize: metrics.size12,
    lineHeight: metrics.size14,
    letterSpacing: metrics.size0_3Negative,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  reserveContainer: {
    height: metrics.size70,
    backgroundColor: 'white',
    borderRadius: metrics.size25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: metrics.size40
  },
  priceText: {
    fontSize: metrics.size20,
    lineHeight: metrics.size24,
    letterSpacing: metrics.size0_3Negative,
    color: '#143656',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: 'rgba(70,208,217,1)',
    borderRadius: metrics.size10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(36),
    paddingVertical: normalize(10),
  },
  reservedText: {
    fontSize: normalize(16),
    lineHeight: metrics.size19,
    letterSpacing: metrics.size0_3Negative,
    color: 'white',
  },
});
