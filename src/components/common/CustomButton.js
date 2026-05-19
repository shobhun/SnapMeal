import { View, Pressable, Text, StyleSheet } from 'react-native';
import { DIMENSIONS, COLORS, FONTS } from '../../constants/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomButton = ({
  title,
  onPress,
  btnStyle,
  txtStyle,
  iconName,
  iconColor,
}) => {
  return (
    <View style={[styles.outerWrapper, btnStyle]}>
      <Pressable
        style={({ pressed }) => [
          styles.innerPressable,
          pressed && styles.pressed,
        ]}
        android_ripple={{
          color: COLORS.ripple,
        }}
        onPress={onPress}
      >
        {iconName && (
          <Icon
            name={iconName}
            size={DIMENSIONS.iconSize}
            color={iconColor}
            style={{ marginRight: 16 }}
          />
        )}
        <Text style={[styles.buttonTxt, txtStyle]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  outerWrapper: {
    marginVertical: DIMENSIONS.xl,
    borderRadius: DIMENSIONS.radiusInput,
    overflow: 'hidden',
    backgroundColor: COLORS.primary,
  },
  innerPressable: {
    flexDirection: 'row',
    height: DIMENSIONS.defaultHeight,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonTxt: {
    fontSize: DIMENSIONS.fontBodyXlg,
    color: COLORS.onSecondary,
    fontFamily: FONTS.medium,
  },
  pressed: {
    opacity: 0.7,
  },
});
