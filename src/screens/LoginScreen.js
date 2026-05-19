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
import ScreenWrapper from '../components/wrappers/ScreenWrapper';

const LoginScreen = () => {
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
                placeholder={STRINGS.login.emailPlaceholder}
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
                size={DIMENSIONS.iconSize}
                color={COLORS.secondary}
              />
              <TextInput
                style={styles.passwordInput}
                secureTextEntry
                placeholder={STRINGS.login.passwordPlaceholder}
                placeholderTextColor={COLORS.secondaryFixedDim}
              />
              <Icon
                style={styles.iconEye}
                name="eye-outline"
                size={DIMENSIONS.iconSize}
                color={COLORS.secondary}
              />
            </View>
          </View>
          <Pressable style={styles.signBtn}>
            <Text style={styles.signinTxt}>{STRINGS.login.signin}</Text>
          </Pressable>
          <View style={styles.loginWithContainer}>
            <View style={styles.line} />
            <Text style={styles.loginWithText}>
              {STRINGS.login.orLoginWith}
            </Text>
            <View style={styles.line} />
          </View>
          <Pressable style={styles.btnGoogle}>
            <Icon
              name="google"
              size={DIMENSIONS.iconSize}
              color={COLORS.secondary}
            />
            <Text style={styles.googleText}>{STRINGS.login.google}</Text>
          </Pressable>
          <Text style={styles.continueText}>
            {STRINGS.login.continueAsGuest}
          </Text>
          <View style={styles.registerContainer}>
            <Text style={styles.noAccountText}>
              {STRINGS.login.dontHaveAccount}
            </Text>
            <Text style={styles.signUpText}>{STRINGS.login.signUpNow}</Text>
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
    height: DIMENSIONS.defaultHeight,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.secondaryContainer,
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: DIMENSIONS.radiusInput,
    alignItems: 'center',
  },
  icon: {
    marginLeft: DIMENSIONS.m,
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
    height: DIMENSIONS.defaultHeight,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.secondaryContainer,
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: DIMENSIONS.radiusInput,
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    marginHorizontal: DIMENSIONS.sm,
    fontFamily: FONTS.medium,
  },
  iconEye: {
    marginHorizontal: DIMENSIONS.m,
  },
  signBtn: {
    height: DIMENSIONS.defaultHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: DIMENSIONS.radiusInput,
    backgroundColor: COLORS.primary,
    marginVertical: DIMENSIONS.xl,
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
    height: DIMENSIONS.defaultHeight,
    width: '100%',
    backgroundColor: COLORS.onPrimary,
    borderRadius: DIMENSIONS.radiusInput,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: DIMENSIONS.xl,
  },
  googleText: {
    marginLeft: DIMENSIONS.md,
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
