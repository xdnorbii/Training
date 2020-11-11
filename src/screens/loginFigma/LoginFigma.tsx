import React, {useState} from 'react';
import {View, Image, Text, TextInput, ScrollView} from 'react-native';
import {emailVerif, glass, house, wrapper, privacy} from '../../core/themes';
import {strings} from '../../core/constants';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import roots from '../../navigation/roots';
import ValidateEmail from '../../core/helpers/ValidateEmail';

const LoginFigma = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstContainer}>
        <View>
          <Image source={house} style={styles.logo} />
          <Image source={glass} style={styles.glass} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.findText}>{strings.find}</Text>
          <Text style={styles.homeText}>{strings.home}</Text>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <Image source={wrapper} style={styles.wrapper} />
        <Text style={styles.welcomeText}>{strings.welcome}</Text>
        <Text style={styles.titleInfo}>{strings.loginForEnjoy}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.emailText}>{strings.email}</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={setEmail}
              value={email}
              autoCapitalize={strings.none}
              autoCorrect={false}
              placeholder={strings.email}
            />
            <Image
              style={styles.emailVerif}
              source={ValidateEmail(email) ? emailVerif : null}
            />
          </View>
          <Text style={styles.passwordText}>{strings.password}</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={setPassword}
              value={password}
              autoCapitalize={strings.none}
              autoCorrect={false}
              placeholder={strings.password}
              secureTextEntry={hidePassword}
            />
            <TouchableOpacity onPress={() => setHidePassword(prev => !prev)}>
              <Image style={styles.emailVerif} source={privacy} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate(roots.roomScreen)}>
            <Text style={styles.loginText}>{strings.LOGIN}</Text>
          </TouchableOpacity>
         
        </View>
        <View style={styles.bottomContainer}>
            <Text style={styles.fotgotPassword}>{strings.forgotPassword}</Text>
            <Text style={styles.createNewAccount}>
              {strings.createNewAccount}
            </Text>
          </View>
      </View>
    </ScrollView>
  );
};
export default LoginFigma;
