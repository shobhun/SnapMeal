import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const { windowWidth, windowHeight } = Dimensions.get('window');

export const DIMENSIONS = {
  //Screen
  screenWidth: width,
  screenHeight: height,

  //Window
  windowWidth: windowWidth,
  windowHeight: windowHeight,

  defaultHeight: 60,

  // Spacing (4px baseline grid)
  base: 4,
  xs: 4,
  sm: 8,
  m: 10,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  marginMobile: 20,
  gutter: 16,

  // Border Radius (Squircle-like shape language)
  radiusSm: 4,
  radiusDefault: 8,
  radiusInput: 10,
  radiusMd: 12,
  radiusLg: 16,
  radiusXl: 24,
  radiusFull: 9999,

  // Backdrop Blur
  blurIntensity: 20,
  blurOpacity: 0.85,

  // Shadow
  shadowBlur: 24,
  shadowOffsetY: 10,
  shadowOpacity: 0.1,

  //Letter Spacing
  minLetterSpacing: 1,
  letterSpacing: 3,

  // Font Sizes (from your design spec)
  fontMain: 42,
  fontDisplay: 32, // display
  fontH1: 24, // h1
  fontH2: 20, // h2
  fontBodyXlg: 18, // body-xlg
  fontBodyLg: 16, // body-lg
  fontBodyMd: 14, // body-md
  fontLabelMd: 12, // label-md

  // icon size
  iconSize: 24,
};
