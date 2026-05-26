import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AvtarPicker = ({ handleEditProfile }) => {
  return (
    <View style={styles.photoContainer}>
      <View style={styles.innerCircle}>
        <Icon name="camera-plus-outline" size={40} color={COLORS.secondary} />
      </View>
      <View style={styles.editButton} onTouchEnd={handleEditProfile}>
        <Icon name="pencil" size={16} color="white" />
      </View>
    </View>
  );
};

export default AvtarPicker;

const styles = StyleSheet.create({
  photoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60, // ← Half of width/height = perfect circle
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderStyle: 'dashed', // ← May look broken on Android
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.surfaceContainerLow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    position: 'absolute', // ← Key! Floats on top of the circle
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
