import {StyleSheet} from 'react-native';
import {fonts, metrics, colors} from '../../../core/themes/';

export const styles = StyleSheet.create({
  container: {
    flex: metrics.size1,
    backgroundColor: 'rgba(70,208,217,1)',
  },
  firstContainer: {
    alignItems: 'center',
  },
  logo: {
    height: metrics.size60,
    width: metrics.size63,
    marginTop: metrics.size91,
  },
  glass: {
    width: 36.5,
    height: 36.5,
    zIndex: metrics.size1,
    position: 'absolute',
    marginTop: 127.5,
    marginLeft: metrics.size35,
  },
  findText: {
    fontSize: metrics.size40,
    lineHeight: metrics.size47,
    color: 'rgb(20, 54, 86)',
    fontWeight: 'bold',
  },
  homeText: {
    fontSize: metrics.size40,
    lineHeight: metrics.size47,
    color: 'white',
    fontStyle: 'normal',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: metrics.size6,
  },
  secondContainer: {
    flex: metrics.size1,
    marginTop: metrics.size38,
    // alignItems: 'center',
    bottom: metrics.size0
  },
  wrapper: {
    flex: metrics.size1,
    resizeMode: 'contain',
    position: 'absolute',
    width: '100%',
  },
  welcomeText: {
    marginTop: metrics.size137,
    fontSize: metrics.size40,
    lineHeight: metrics.size47,
    color: colors.darkCerulean,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleInfo: {
    fontSize: metrics.size20,
    lineHeight: metrics.size24,
    color: 'rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  inputContainer: {
    marginHorizontal: 29.5,
    marginTop: metrics.size47,
  },
  emailText: {
    fontSize: metrics.size14,
    lineHeight: metrics.size17,
    color: 'rgba(19,73,123,1)',
  },
  passwordText: {
    fontSize: metrics.size14,
    lineHeight: metrics.size17,
    color: 'rgba(19,73,123,1)',
    marginTop: metrics.size15,
  },
  textInputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: metrics.size9,
    borderRadius: metrics.size15,
    justifyContent: 'space-between',
  },
  textInput: {
    marginLeft: metrics.size35,
  },
  emailVerif: {
    marginTop: metrics.size14,
    marginRight: metrics.size14,
  },
  loginButton: {
    backgroundColor: colors.darkCerulean,
    height: metrics.size55,
    marginTop: metrics.size41,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.size10,
    shadowColor: '#000',
    shadowOffset: {
      width: metrics.size0,
      height: metrics.size1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.40,
    elevation: metrics.size2,
  },
  loginText: {
    color: 'white',
    fontSize: metrics.size14,
    lineHeight: metrics.size17,
    fontWeight: 'bold',
  },
  bottomContainer: {
    marginTop: metrics.size36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: metrics.size40,
    backgroundColor: 'white',
  },
  fotgotPassword: {
    fontSize: metrics.size14,
    lineHeight: metrics.size17,
    color: 'rgba(0,0,0,0.8)',
    marginLeft: metrics.size29_5
  },
  createNewAccount: {
    fontSize: metrics.size14,
    lineHeight: metrics.size17,
    color: colors.darkCerulean,
    fontWeight: 'bold',
    marginRight: metrics.size29_5
  }
});
