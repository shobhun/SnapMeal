import { StyleSheet, Image, ImageBackground, Text } from 'react-native';
import { getDimensions } from '../utils/helpers';
import { STRINGS, FONTS } from '../constants';

const SplashScreen = () => {
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
    height: getDimensions().height,
    width: getDimensions().width,
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
    fontSize: 42,
    color: '#FFFFFF',
  },
  appmotoText: {
    fontFamily: FONTS.bold,
    fontSize: 21,
    color: '#FFFFFF',
    marginTop: 5,
    letterSpacing: 3,
  },
});
