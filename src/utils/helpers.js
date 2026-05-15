import { Dimensions } from 'react-native';

export function getDimensions() {
  const dimensions = {};
  dimensions['height'] = Dimensions.get('screen').height;
  dimensions['width'] = Dimensions.get('screen').width;

  return dimensions;
}
