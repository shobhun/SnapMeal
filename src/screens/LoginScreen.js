import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { DIMENSIONS, STRINGS, FONTS, COLORS } from '../constants/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = () => {
  return (
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
        <View style={styles.emailPasswordContainer}>
          <Text style={styles.emailText}>{STRINGS.login.email}</Text>
          <View style={styles.emailInputContainer}>
            <Icon
              style={styles.icon}
              name="email-outline"
              size={24}
              color={COLORS.secondary}
            />
            <TextInput
              placeholder="Enter your Email id"
              style={styles.emailInput}
              placeholderTextColor={COLORS.secondaryFixedDim}
            />
          </View>
        </View>
        <View style={styles.emailPasswordContainer}>
          <View style={styles.passwordView}>
            <Text style={styles.passwordText}>{STRINGS.login.password}</Text>
            <Text style={styles.forgotPasswordText}>
              {STRINGS.login.forgotPassword}
            </Text>
          </View>
          <View style={styles.passwordInputContainer}>
            <Icon
              style={styles.icon}
              name="lock-outline"
              size={24}
              color={COLORS.secondary}
            />
            <TextInput
              placeholder="••••••••"
              placeholderTextColor={COLORS.secondaryFixedDim}
            />
            <Icon
              style={styles.icon}
              name="eye-outline"
              size={24}
              color={COLORS.secondary}
            />
          </View>
        </View>
        <Pressable style={styles.signBtn}>
          <Text style={styles.signinTxt}>{STRINGS.login.signin}</Text>
        </Pressable>
        <View style={styles.loginWithContainer}>
          <View style={styles.line} />
          <Text style={styles.loginWithText}>{STRINGS.login.orLoginWith}</Text>
          <View style={styles.line} />
        </View>
        <Pressable style={styles.btnGoogle}>
          <Icon name="google" size={24} color={COLORS.secondary} />
          <Text style={styles.googleText}>{'    ' + STRINGS.login.google}</Text>
        </Pressable>
        <Text style={styles.continueText}>{STRINGS.login.continueAsGuest}</Text>
        <View style={styles.registerContainer}>
          <Text style={styles.noAccountText}>
            {STRINGS.login.dontHaveAccount}
          </Text>
          <Text style={styles.signUpText}>{STRINGS.login.signUpNow}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F6F1EF',
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
  emailPasswordContainer: {
    marginTop: DIMENSIONS.marginMobile,
    alignItems: 'flex-start',
  },
  emailText: {
    fontSize: DIMENSIONS.fontBodyXlg,
    fontFamily: FONTS.medium,
    marginVertical: DIMENSIONS.md,
    color: COLORS.onSurfaceVariant,
  },
  emailInputContainer: {
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.secondaryContainer,
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  emailInput: {
    flex: 1,
    fontSize: DIMENSIONS.fontBodyXlg,
    fontFamily: FONTS.medium,
    marginHorizontal: DIMENSIONS.sm,
  },
  passwordView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  passwordText: {
    fontSize: DIMENSIONS.fontBodyXlg,
    fontFamily: FONTS.medium,
    marginVertical: DIMENSIONS.md,
    color: COLORS.onSurfaceVariant,
  },
  forgotPasswordText: {
    fontSize: DIMENSIONS.fontBodyXlg,
    fontFamily: FONTS.medium,
    marginVertical: DIMENSIONS.md,
    color: COLORS.primary,
  },
  passwordInputContainer: {
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.secondaryContainer,
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: 10,
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    fontFamily: FONTS.medium,
  },
  signBtn: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginVertical: DIMENSIONS.marginMobile,
  },
  signinTxt: {
    fontSize: DIMENSIONS.fontBodyXlg,
    color: COLORS.onSecondary,
    fontFamily: FONTS.medium,
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
  btnGoogle: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    backgroundColor: COLORS.onPrimary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: DIMENSIONS.marginMobile,
  },
  googleText: {
    color: COLORS.onSurface,
    fontSize: DIMENSIONS.fontBodyXlg,
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
