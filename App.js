import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from './src/screens/SplashScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <SplashScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
