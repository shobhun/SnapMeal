import { StyleSheet, View, StatusBar } from 'react-native';

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
