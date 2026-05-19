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
    <View
      style={{
        overflow: 'hidden',
        btnStyle,
        borderRadius: DIMENSIONS.radiusInput,
      }}
    >
      <Pressable
        style={({ pressed }) => [
          styles.containerBtn,
          btnStyle,
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
  containerBtn: {
    flexDirection: 'row',
    height: DIMENSIONS.defaultHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: DIMENSIONS.radiusInput,
    marginVertical: DIMENSIONS.xl,
  },
  buttonTxt: {
    fontSize: DIMENSIONS.fontBodyXlg,
    fontFamily: FONTS.medium,
  },
  pressed: {
    opacity: 0.7,
  },
});
