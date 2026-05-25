import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ScreenWrapper from '../components/wrappers/ScreenWrapper';
import { COLORS, STRINGS, DIMENSIONS, FONTS } from '../constants';
import CustomTextInput from '../components/common/CustomTextInput';
import CustomButton from '../components/common/CustomButton';
import AvtarPicker from '../components/common/AvatarPicker';

const SignUpScreen = ({ navigation }) => {
  const handleSignUp = () => {
    Toast.show({
      visibilityTime: 2000,
      type: 'info',
      text1: `Email : ${email} and Password : ${password}`,
    });
  };

  const handleSigninNavigation = () => {
    navigation.popToTop();
  };

  return (
    <ScreenWrapper
      barStyle="dark-content"
      statusBarColor={COLORS.backgroundColor}
    >
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.headerText}>{STRINGS.signup.foodieFlow}</Text>
        <Text style={styles.commonText}>{STRINGS.signup.joinCommunity}</Text>
        <View style={styles.container}>
          <AvtarPicker />
          <Text style={styles.commonText}>{STRINGS.signup.uploadPhoto}</Text>
          <CustomTextInput
            title={STRINGS.signup.fullName}
            type={STRINGS.common.inputTypeNormal}
            placeholder={STRINGS.signup.fullName}
            icon={'account-outline'}
            //onTextChange={setEmail}
            //value={email}
          />
          <CustomTextInput
            title={STRINGS.signup.email}
            type={STRINGS.common.inputTypeNormal}
            placeholder={STRINGS.signup.email}
            icon={'email-outline'}
            //onTextChange={setEmail}
            //value={email}
          />
          <CustomTextInput
            title={STRINGS.signup.phone}
            type={STRINGS.common.inputTypeNormal}
            placeholder={STRINGS.signup.phone}
            icon={'phone-outline'}
            //onTextChange={setEmail}
            //value={email}
          />
          <CustomTextInput
            title={STRINGS.signup.password}
            type={STRINGS.common.inputTypePassword}
            placeholder={STRINGS.login.passwordPlaceholder}
            icon={'lock-outline'}
            //onTextChange={setEmail}
            //value={email}
          />
          <CustomButton
            title={STRINGS.signup.createAccount}
            onPress={handleSignUp}
            btnStyle={{ backgroundColor: COLORS.primary }}
            txtStyle={{ color: COLORS.onSecondary }}
          />
          <View style={styles.loginContainer}>
            <Text style={styles.accountText}>
              {STRINGS.signup.alreadyHaveAccount}
            </Text>
            <Text style={styles.signInText} onPress={handleSigninNavigation}>
              {STRINGS.signup.signIn}
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.commonText,
            { marginHorizontal: DIMENSIONS.xl, marginBottom: DIMENSIONS.xl },
          ]}
        >
          {STRINGS.signup.agreeTC}
        </Text>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    height: DIMENSIONS.screenHeight,
    width: DIMENSIONS.screenWidth,
  },
  headerText: {
    fontSize: DIMENSIONS.xl,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: DIMENSIONS.xl,
    marginBottom: DIMENSIONS.xs,
  },
  commonText: {
    fontSize: DIMENSIONS.md,
    fontFamily: FONTS.medium,
    color: COLORS.secondary,
    textAlign: 'center',
    marginTop: DIMENSIONS.base,
    marginBottom: DIMENSIONS.m,
  },
  container: {
    padding: DIMENSIONS.marginMobile,
    marginHorizontal: DIMENSIONS.marginMobile,
    marginTop: DIMENSIONS.xl,
    marginBottom: DIMENSIONS.xxl,
    backgroundColor: COLORS.onPrimary,
    borderRadius: DIMENSIONS.marginMobile,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: DIMENSIONS.sm,
  },
  accountText: {
    fontSize: DIMENSIONS.fontBodyXlg,
    color: COLORS.secondary,
    fontFamily: FONTS.medium,
  },
  signInText: {
    fontSize: DIMENSIONS.fontBodyXlg,
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    marginLeft: DIMENSIONS.base,
  },
});
