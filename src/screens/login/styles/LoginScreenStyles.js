import {StyleSheet, Dimensions} from 'react-native';
import {metrics, colors} from '../../../core/themes/';

export default StyleSheet.create({
  root: {
    flex: metrics.size1,
    backgroundColor: colors.turquoise,
    alignItems: 'center',
  },
  search: {
    // width: 50,
    // height: 50,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    top: metrics.size90,
    justifyContent: 'center',
    alignItems: 'center',
    height: metrics.size80,
  },
  triangleView: {
    justifyContent: 'center',
    alignItems: 'center',
    width:
      Math.sqrt(
        (Dimensions.get('window').width * Dimensions.get('window').width) / 2,
      ) + 50,
    height:
      Math.sqrt(
        (Dimensions.get('window').width * Dimensions.get('window').width) / 2,
      ) + 50,
    bottom:
      -(
        Math.sqrt(
          (Dimensions.get('window').width * Dimensions.get('window').width) / 2,
        ) + 60
      ) / 2,
    backgroundColor: colors.zircon,
    borderRadius: metrics.size76,
    transform: [{rotate: '45deg'}],
  },
  containerOutter: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.zircon,
  },
  headerContainer: {
    alignItems: 'center',
  },
  containerInner: {
    flex: 1,
    alignItems: 'center',
    top: -(
      (Math.sqrt(
        (Dimensions.get('window').width * Dimensions.get('window').width) / 2,
      ) +
        120) /
        2 -
      137
    ),
  },
  headerText: {
    fontSize: metrics.size40,
    lineHeight: metrics.size47,
    fontWeight: '500',
    color: colors.chathamsBlue,
    fontFamily: 'Rubik',
  },
  subHeaderText: {
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 24,
    opacity: 0.3,
  },
  inputsContainer: {
    flex: 1,
    width: '100%',
    marginTop: metrics.size47,
  },
  loginButton: {
    backgroundColor: colors.chathamsBlue,
    height: metrics.size55,
    marginTop: metrics.size26,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.size10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginButtonText: {
    color: colors.white,
  },
  footer: {
    marginTop: metrics.size36,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgotPassword: {
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 16,
    color: '#00000080',
  },
  createAccount: {
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 16,
    color: colors.chathamsBlue,
  },
});
