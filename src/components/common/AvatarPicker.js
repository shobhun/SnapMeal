import { StyleSheet, View, Image } from 'react-native';
import { COLORS } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AvtarPicker = ({ handleEditProfile, imgSrc }) => {
  return (
    <View style={styles.photoContainer}>
      <View style={styles.innerCircle}>
        <Image
          style={styles.avtarImage}
          source={
            imgSrc == ''
              ? require('../../assets/images/default_avatar.png')
              : { uri: `data:image/jpeg;base64,${imgSrc}` }
          }
        />
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
    borderRadius: 60,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderStyle: 'dashed',
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
  avtarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editButton: {
    position: 'absolute',
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
