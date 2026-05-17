import { StyleSheet, Image, ImageBackground, Text } from 'react-native';
import { STRINGS, FONTS, DIMENSIONS } from '../constants';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Start Interval
    const interval = setInterval(() => {
      navigation.replace('Login');
    }, 1000);

    // Clear Interval
    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground
      style={styles.containerImage}
      source={require('../assets/images/splash_bg.png')}
    >
      <Image
        style={styles.centerImage}
        source={require('../assets/icons/logo.png')}
      />
      <Text style={styles.appnameText}>{STRINGS.common.appName}</Text>
      <Text style={styles.appmotoText}>{STRINGS.splash.tagline}</Text>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    height: DIMENSIONS.screenHeight,
    width: DIMENSIONS.screenWidth,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImage: {
    height: 150,
    width: 150,
  },
  appnameText: {
    fontFamily: FONTS.bold,
    fontWeight: 'bold',
    fontSize: DIMENSIONS.fontMain,
    color: '#FFFFFF',
  },
  appmotoText: {
    fontFamily: FONTS.bold,
    fontSize: DIMENSIONS.fontH2,
    color: '#FFFFFF',
    marginTop: DIMENSIONS.base,
    letterSpacing: DIMENSIONS.letterSpacing,
  },
});
