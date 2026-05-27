import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ScreenWrapper from '../components/wrappers/ScreenWrapper';
import { COLORS, STRINGS, DIMENSIONS, FONTS } from '../constants';
import CustomTextInput from '../components/common/CustomTextInput';
import CustomButton from '../components/common/CustomButton';
import AvtarPicker from '../components/common/AvatarPicker';
import BottomSheet from '../components/common/BottomSheet';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react';

const SignUpScreen = ({ navigation }) => {
  const [bottomSheetVisibilty, setBottomSheetVisibilty] = useState(false);
  const [avtar, setAvtar] = useState('');

  const handleSignUp = () => {};

  const handleSigninNavigation = () => {
    navigation.popToTop();
  };

  const showBottomSheet = () => {
    setBottomSheetVisibilty(!bottomSheetVisibilty);
  };

  const handleImageResponse = res => {
    console.log(`res: ${res}`);
    showBottomSheet();
    setAvtar(res.assets[0].base64);
  };

  const openCamera = async () => {
    launchCamera(
      { mediaType: 'photo', includeBase64: true, quality: 0.6 },
      res => handleImageResponse(res),
    );
  };

  const openGallery = async () => {
    launchImageLibrary(
      { mediaType: 'photo', includeBase64: true, quality: 0.6 },
      res => handleImageResponse(res),
    );
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
          <AvtarPicker handleEditProfile={showBottomSheet} imgSrc={avtar} />
          <Text style={styles.commonText}>{STRINGS.signup.uploadPhoto}</Text>
          <CustomTextInput
            title={STRINGS.signup.fullName}
            type={STRINGS.common.inputTypeNormal}
            placeholder={STRINGS.signup.fullName}
            icon={'account-outline'}
            //onTextChange={setEmail}
            //value={email}
            keyboardType="default"
          />
          <CustomTextInput
            title={STRINGS.signup.email}
            type={STRINGS.common.inputTypeNormal}
            placeholder={STRINGS.signup.email}
            icon={'email-outline'}
            //onTextChange={setEmail}
            //value={email}
            keyboardType="default"
          />
          <CustomTextInput
            title={STRINGS.signup.phone}
            type={STRINGS.common.inputTypeNormal}
            placeholder={STRINGS.signup.phone}
            icon={'phone-outline'}
            //onTextChange={setEmail}
            //value={email}
            keyboardType="phone-pad"
          />
          <CustomTextInput
            title={STRINGS.signup.password}
            type={STRINGS.common.inputTypePassword}
            placeholder={STRINGS.login.passwordPlaceholder}
            icon={'lock-outline'}
            //onTextChange={setEmail}
            //value={email}
            keyboardType="default"
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
      <BottomSheet
        showSheet={bottomSheetVisibilty}
        setSheetVisibilty={setBottomSheetVisibilty}
        onCameraPress={openCamera}
        onGalleryPress={openGallery}
      />
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
