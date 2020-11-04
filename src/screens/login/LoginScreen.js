import React, {useState} from 'react';
import {View, Image, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {connect} from 'react-redux';
import {LOGIN_SAGA} from './redux';
import {FieldInput} from '../../core/components';
import {search, ok, see} from '../../core/themes';
import {LoginScreenStyles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {roots} from '../../navigation';

const ValidateEmail = (mail)=> 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    return (false)
}

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <SafeAreaView style={LoginScreenStyles.root}>
      <ScrollView
        style={LoginScreenStyles.scrollView}
        contentContainerStyle={LoginScreenStyles.content}>
        <View style={LoginScreenStyles.searchContainer}>
          <Image source={search} style={LoginScreenStyles.search} />
        </View>
        <View style={LoginScreenStyles.triangleView} />
        <View style={LoginScreenStyles.containerOutter}>
          <View style={LoginScreenStyles.containerInner}>
            <View style={LoginScreenStyles.headerContainer}>
              <Text style={LoginScreenStyles.headerText}>Welcome</Text>
              <Text style={LoginScreenStyles.subHeaderText}>
                Login for enjoy findhome
              </Text>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"} style={LoginScreenStyles.inputsContainer}>
              <FieldInput
                onChangeValue={text => setEmail(text)}
                image={ValidateEmail(email) ? ok : ''}
                label={'Email'}
              />
              <FieldInput
                onPressRightIcon={() => setHidePassword(prev => !prev)}
                onChangeValue={text => setPassword(text)}
                image={see}
                textContentType={'password'}
                secureTextEntry={hidePassword}
                label={'Password'}
              />
              <TouchableOpacity style={LoginScreenStyles.loginButton} onPress={()=>navigation.navigate(roots.screen2)}>
                <Text style={LoginScreenStyles.loginButtonText}>Login</Text>
              </TouchableOpacity>
              <View style={LoginScreenStyles.footer}>
                <Text style={LoginScreenStyles.forgotPassword}>
                  Forgot password?
                </Text>
                <Text style={LoginScreenStyles.createAccount}>
                  create new account
                </Text>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
