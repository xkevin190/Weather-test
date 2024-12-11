import { Dimensions, PixelRatio } from 'react-native';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// based on iphone 5s's scale
const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

const isTablet = SCREEN_WIDTH >= 650;
const isLargeTablet = SCREEN_WIDTH >= 810;

const minFontSize = 8;

const normalize = (size: number, based = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};


const widthPixel = (size: number) => {
  return normalize(size, 'width');
};

const heightPixel = (size: number) => {
  return normalize(size, 'height');
};

const fontPixel = (size: number) => {
  let adjustedSize = size;

  const newSize = adjustedSize * widthBaseScale;
  return Math.max(minFontSize, PixelRatio.roundToNearestPixel(newSize));
};


const pixelSizeVertical = (size: number) => {
  return heightPixel(size);
};


const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size);
};

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  normalize,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  isTablet,
  isLargeTablet,
};
