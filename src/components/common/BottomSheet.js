import { Modal, Text, TouchableOpacity } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { COLORS, DIMENSIONS, FONTS } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomSheet = ({
  showSheet,
  setSheetVisibilty,
  onCameraPress,
  onGalleryPress,
}) => {
  return (
    <View>
      <Modal
        animationType="slide"
        visible={showSheet}
        onRequestClose={() => setSheetVisibilty(false)}
        transparent={true}
      >
        {/* Dark overlay — tapping it closes the sheet */}
        <View
          style={styles.mainContainer}
          onTouchEnd={() => setSheetVisibilty(false)}
        >
          {/* Bottom sheet card — stops touch from bubbling to overlay */}
          <View
            style={styles.pickerContainer}
            onTouchEnd={e => e.stopPropagation()}
          >
            {/* Drag handle indicator */}
            <View style={styles.dragHandle} />

            {/* Title */}
            <Text style={styles.title}>Choose Photo</Text>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Options row */}
            <View style={styles.optionsRow}>
              {/* Camera option */}
              <TouchableOpacity
                style={styles.optionButton}
                onPress={onCameraPress}
              >
                <View style={styles.iconCard}>
                  <Icon
                    name="camera-outline"
                    size={36}
                    color={COLORS.primary}
                  />
                </View>
                <Text style={styles.optionLabel}>Take Photo</Text>
              </TouchableOpacity>

              {/* Gallery option */}
              <TouchableOpacity
                style={styles.optionButton}
                onPress={onGalleryPress}
              >
                <View style={styles.iconCard}>
                  <Icon
                    name="image-multiple-outline"
                    size={36}
                    color={COLORS.primary}
                  />
                </View>
                <Text style={styles.optionLabel}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: COLORS.onPrimary,
    borderTopLeftRadius: DIMENSIONS.radiusXl,
    borderTopRightRadius: DIMENSIONS.radiusXl,
    paddingBottom: DIMENSIONS.xl,
    paddingHorizontal: DIMENSIONS.marginMobile,
    alignItems: 'center',
  },
  dragHandle: {
    width: 40,
    height: DIMENSIONS.base,
    borderRadius: DIMENSIONS.radiusFull,
    backgroundColor: COLORS.secondaryContainer,
    marginTop: DIMENSIONS.md,
    marginBottom: DIMENSIONS.sm,
  },
  title: {
    fontSize: DIMENSIONS.fontH2,
    fontFamily: FONTS.bold,
    color: COLORS.onSurface,
    marginVertical: DIMENSIONS.md,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.secondaryContainer,
    marginBottom: DIMENSIONS.xl,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  optionButton: {
    alignItems: 'center',
    gap: DIMENSIONS.sm,
  },
  iconCard: {
    width: 90,
    height: 90,
    borderRadius: DIMENSIONS.radiusLg,
    backgroundColor: COLORS.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionLabel: {
    fontSize: DIMENSIONS.fontBodyMd,
    fontFamily: FONTS.medium,
    color: COLORS.onSurface,
  },
});
