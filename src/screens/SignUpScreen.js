import { StyleSheet, View, Text } from 'react-native';
import ScreenWrapper from '../components/wrappers/ScreenWrapper';
import { COLORS } from '../constants';

const SignUpScreen = () => {
  return (
    <ScreenWrapper
      barStyle="dark-content"
      statusBarColor={COLORS.backgroundColor}
    >
      <Text>Sign Up</Text>
      <Text>Sign Up</Text>
    </ScreenWrapper>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
