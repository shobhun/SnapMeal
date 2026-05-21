import { StyleSheet, View, StatusBar } from 'react-native';

/**
 * ScreenWrapper provides a consistent layout wrapper for screens.
 * It manages the safe area and sets the status bar style/color globally.
 */
const ScreenWrapper = ({ children, barStyle, statusBarColor }) => {
  return (
    <View style={style.container}>
      <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
