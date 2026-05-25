import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DIMENSIONS, STRINGS, FONTS, COLORS } from '../constants/index';
import ScreenWrapper from '../components/wrappers/ScreenWrapper';
import CustomButton from '../components/common/CustomButton';
import CustomTextInput from '../components/common/CustomTextInput';
import Toast from 'react-native-toast-message';
import { useState } from 'react';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Show a global toast notification upon sign-in attempt
    Toast.show({
      visibilityTime: 2000,
      type: 'info',
      text1: `Email : ${email} and Password : ${password}`,
    });
  };

  const handleSignupNavigation = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScreenWrapper
      barStyle="dark-content"
      statusBarColor={COLORS.backgroundColor}
    >
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.imgLogo}
              source={require('../assets/icons/logo.png')}
            />
          </View>
          <Text style={styles.welcomeText}>{STRINGS.login.welcome}</Text>
          <Text style={styles.signTxt}>{STRINGS.login.signinMsg}</Text>
          <CustomTextInput
            title={STRINGS.signup.email}
            type={STRINGS.common.inputTypeNormal}
            placeholder={STRINGS.login.emailPlaceholder}
            icon={'email-outline'}
            onTextChange={setEmail}
            value={email}
          />
          <CustomTextInput
            title={STRINGS.signup.password}
            type={STRINGS.common.inputTypePassword}
            placeholder={STRINGS.login.passwordPlaceholder}
            icon={'lock-outline'}
            onTextChange={setPassword}
            value={password}
          />
          <CustomButton
            title={STRINGS.login.signin}
            onPress={handleSignIn}
            btnStyle={{ backgroundColor: COLORS.primary }}
            txtStyle={{ color: COLORS.onSecondary }}
          />
          <View style={styles.loginWithContainer}>
            <View style={styles.line} />
            <Text style={styles.loginWithText}>
              {STRINGS.login.orLoginWith}
            </Text>
            <View style={styles.line} />
          </View>
          <CustomButton
            title={STRINGS.login.google}
            onPress={handleSignIn}
            btnStyle={{ backgroundColor: COLORS.onPrimary }}
            txtStyle={{ color: COLORS.onSurface }}
            iconName="google"
            iconColor={COLORS.secondary}
          />
          <Text style={styles.continueText}>
            {STRINGS.login.continueAsGuest}
          </Text>
          <View style={styles.registerContainer}>
            <Text style={styles.noAccountText}>
              {STRINGS.login.dontHaveAccount}
            </Text>
            <Text style={styles.signUpText} onPress={handleSignupNavigation}>
              {STRINGS.login.signUpNow}
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    height: DIMENSIONS.screenHeight,
    width: DIMENSIONS.screenWidth,
  },
  container: {
    margin: DIMENSIONS.marginMobile,
  },
  logoContainer: {
    alignItems: 'center',
  },
  imgLogo: {
    marginTop: 70,
    width: 140,
    height: 140,
  },
  welcomeText: {
    fontSize: DIMENSIONS.fontDisplay,
    fontFamily: FONTS.bold,
    textAlign: 'center',
  },
  signTxt: {
    fontSize: DIMENSIONS.fontBodyXlg,
    fontFamily: FONTS.medium,
    marginTop: DIMENSIONS.base,
    color: COLORS.secondary,
    textAlign: 'center',
  },
  loginWithContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.secondary,
    opacity: 0.2,
  },
  loginWithText: {
    marginHorizontal: 15,
    fontSize: DIMENSIONS.fontBodyXlg,
    color: COLORS.secondary,
    opacity: 0.7,
    fontFamily: FONTS.medium,
  },
  continueText: {
    fontSize: DIMENSIONS.fontBodyXlg,
    fontFamily: FONTS.medium,
    color: COLORS.secondary,
    marginVertical: DIMENSIONS.marginMobile,
    textAlign: 'center',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: DIMENSIONS.md,
  },
  noAccountText: {
    fontSize: DIMENSIONS.fontBodyXlg,
    color: COLORS.secondary,
    fontFamily: FONTS.medium,
  },
  signUpText: {
    fontSize: DIMENSIONS.fontBodyXlg,
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    marginLeft: DIMENSIONS.base,
  },
});
