import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ScreenWrapper from '../components/wrappers/ScreenWrapper';
import { COLORS, STRINGS, DIMENSIONS, FONTS } from '../constants';
import CustomTextInput from '../components/common/CustomTextInput';
import CustomButton from '../components/common/CustomButton';
import AvtarPicker from '../components/common/AvatarPicker';
import BottomSheet from '../components/common/BottomSheet';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react';
import { signUpSchema } from '../utils/validations';
import Toast from 'react-native-toast-message';

const SignUpScreen = ({ navigation }) => {
  const [bottomSheetVisibilty, setBottomSheetVisibilty] = useState(false);
  const [avtar, setAvtar] = useState('');

  // Form Field State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // State of error handling
  const [errors, setErrors] = useState({});

  // Handle navigation back to Login Screen
  const handleSigninNavigation = () => {
    navigation.popToTop();
  };

  // Handle the visibility of bottom sheet
  const showBottomSheet = () => {
    setBottomSheetVisibilty(!bottomSheetVisibilty);
  };

  // Handle setting of image to the Avtar Picker custom component
  const handleImageResponse = res => {
    showBottomSheet();
    setAvtar(res.assets[0].base64);
  };

  // Handle open Camera action
  const openCamera = async () => {
    launchCamera(
      { mediaType: 'photo', includeBase64: true, quality: 0.6 },
      res => handleImageResponse(res),
    );
  };

  // Handle open Gallery action
  const openGallery = async () => {
    launchImageLibrary(
      { mediaType: 'photo', includeBase64: true, quality: 0.6 },
      res => handleImageResponse(res),
    );
  };

  // Validate the input feild using zod
  const validateField = (field, value) => {
    const result = signUpSchema.shape[field].safeParse(value);
    console.log(`result is ${result}`);

    if (!result.success) {
      // Invalid - set the error message for particular feild only
      setErrors(prev => ({ ...prev, [field]: result.error.errors[0].message }));
      Toast.show({
        visibilityTime: 3000,
        type: 'error',
        text1: `${result.error.errors[0].message}`,
      });
    } else {
      // Valid clear the message for the feild
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  //Validation on Click of Create Account
  // Handle the new userupload
  const validateOnSubmit = () => {
    const result = signUpSchema.safeParse({ fullName, email, phone, password });

    if (result.success) {
      // All valid
    } else {
      // Collect and put them in error state
      const newErrors = {};
      result.error.errors.forEach(err => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors); //All Invalid field will be saved in a state

      const firstErrorMessage = Object.values(newErrors)[0];

      Toast.show({
        visibilityTime: 3000,
        type: 'error',
        text1: firstErrorMessage, // e.g., "Full name is required"
      });
    }
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
            onTextChange={setFullName}
            value={fullName}
            keyboardType="default"
            onBlur={() => validateField('fullName', fullName)}
          />
          <CustomTextInput
            title={STRINGS.signup.email}
            type={STRINGS.common.inputTypeNormal}
            placeholder={STRINGS.signup.email}
            icon={'email-outline'}
            onTextChange={setEmail}
            value={email}
            keyboardType="default"
            onBlur={() => validateField('email', email)}
          />
          <CustomTextInput
            title={STRINGS.signup.phone}
            type={STRINGS.common.inputTypeNormal}
            placeholder={STRINGS.signup.phone}
            icon={'phone-outline'}
            onTextChange={setPhone}
            value={phone}
            keyboardType="phone-pad"
            onBlur={() => validateField('phone', phone)}
          />
          <CustomTextInput
            title={STRINGS.signup.password}
            type={STRINGS.common.inputTypePassword}
            placeholder={STRINGS.login.passwordPlaceholder}
            icon={'lock-outline'}
            onTextChange={setPassword}
            value={password}
            keyboardType="default"
            onBlur={() => validateField('password', password)}
          />
          <CustomButton
            title={STRINGS.signup.createAccount}
            onPress={validateOnSubmit}
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
