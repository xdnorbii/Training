import React, {useState} from 'react';
import {View, Image,Text, Dimensions,ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {LOGIN_SAGA} from './redux';
import {RoundedButton, FieldInput} from '../../core/components';
import {logo, search, ok, see} from '../../core/themes';
import {strings} from '../../core/constants';
import {colors} from '../../core/themes';
import {LoginScreenStyles} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


const LoginScreen = ({login, message, isFetchingToken}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidePassword, setHidePassword] = useState(true);
  console.log(Dimensions.get('window').height);
  return (
    <View style={LoginScreenStyles.root}>
      <View style={LoginScreenStyles.searchContainer}>
      <Image source={search} style={LoginScreenStyles.search}/>
      </View>
      <View style={LoginScreenStyles.triangleView}>
      </View>
      <View style={LoginScreenStyles.containerOutter}>
        <View style={LoginScreenStyles.containerInner}>
         <View style={LoginScreenStyles.headerContainer}>
            <Text style={LoginScreenStyles.headerText}>Welcome</Text>
            <Text style={LoginScreenStyles.subHeaderText}>Login for enjoy findhome</Text>
         </View>
         <View style={LoginScreenStyles.inputsContainer}>
            <FieldInput image={ok} label={'Email'}/>
            <FieldInput image={see} textContentType={'password'} secureTextEntry={true} label={'Password'}/>
            <TouchableOpacity style={LoginScreenStyles.loginButton}>
              <Text style={LoginScreenStyles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={LoginScreenStyles.footer}>
              <Text>Forgot password?</Text>
              <Text>create new account</Text>
            </View>
         </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const {message, isFetchingToken} = state.login.loginReducer;
  return {message, isFetchingToken};
};

const mapDispatchToProps = dispatch => ({
  login: () => dispatch({type: LOGIN_SAGA}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
