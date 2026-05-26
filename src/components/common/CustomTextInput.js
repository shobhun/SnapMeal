// Created custom Text Input Component with title and icon
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, STRINGS, DIMENSIONS, FONTS } from '../../constants';
import { useState } from 'react';

const CustomTextInput = ({
  title,
  type,
  placeholder,
  icon,
  onTextChange,
  value,
  keyboardType,
}) => {
  const [isSecure, setIsSecure] = useState(true);
  const [eyeName, setEyeName] = useState('eye');

  // Toggles the secureTextEntry state and updates the icon
  const handlePasswordVisibility = () => {
    setIsSecure(!isSecure);
    setEyeName(isSecure ? 'eye' : 'eye-off');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{title}</Text>
        {/* Base on the type of input text, showing necessary feilds */}
        {type === STRINGS.common.inputTypePassword && (
          <Text style={styles.forgotPasswordText}>
            {STRINGS.login.forgotPassword}
          </Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Icon
          style={styles.icon}
          name={icon}
          size={DIMENSIONS.iconSize}
          color={COLORS.secondary}
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry={
            type === STRINGS.common.inputTypePassword ? isSecure : false
          }
          placeholder={placeholder}
          placeholderTextColor={COLORS.secondaryFixedDim}
          onChangeText={onTextChange}
          value={value}
          keyboardType={keyboardType}
        />
        {type === STRINGS.common.inputTypePassword && (
          <Icon
            style={styles.iconEye}
            name={eyeName}
            size={DIMENSIONS.iconSize}
            color={COLORS.secondary}
            onPress={handlePasswordVisibility}
          />
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: DIMENSIONS.marginMobile,
    alignItems: 'flex-start',
  },
  headerView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: DIMENSIONS.fontBodyXlg,
    fontFamily: FONTS.medium,
    marginVertical: DIMENSIONS.md,
    color: COLORS.onSurfaceVariant,
  },
  forgotPasswordText: {
    fontSize: DIMENSIONS.fontBodyXlg,
    fontFamily: FONTS.medium,
    marginVertical: DIMENSIONS.md,
    color: COLORS.primary,
  },
  inputContainer: {
    height: DIMENSIONS.defaultHeight,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.secondaryContainer,
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: DIMENSIONS.radiusInput,
    alignItems: 'center',
    paddingLeft: DIMENSIONS.sm,
  },
  textInput: {
    flex: 1,
    marginHorizontal: DIMENSIONS.sm,
    fontFamily: FONTS.medium,
  },
  iconEye: {
    marginHorizontal: DIMENSIONS.m,
  },
});
