import { Platform } from 'react-native';

// we define available font weight and styles for each font here
/* eslint-disable quote-props */
const font = {
  Rubik: {
    weights: {
      '700': 'Bold',
      '500': 'Medium',
      '400': 'Regular',
      '300': 'Light',
    },
    styles: {
      Italic: 'italic',
    },
  }
};
/* eslint-disable quote-props */

// generate styles for a font with given weight and style
export const fontMaker = (options = {}) => {
  // eslint-disable-next-line prefer-const
  let { weight, style, family } = { weight: null, style: null, family: 'Rubik', ...options };

  const { weights, styles } = font[family];

  if (Platform.OS === 'android') {
    weight = weights[weight] ? weights[weight] : '';
    style = styles[style] ? style : '';

    const suffix = weight + style;

    return {
      fontFamily: family + (suffix.length ? `-${suffix}` : ''),
      fontWeight: 'normal',
    };
  }

  style = styles[style] || 'normal';

  return {
    fontFamily: family,
    fontWeight: weight || '400',
    fontStyle: style,
  };
};
