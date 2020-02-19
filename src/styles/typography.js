import { scaleFont } from './mixins';

// FONT FAMILY
const PRIMARY_FONT_FAMILY = 'Rubik';

// FONT WEIGHT
const FONT_WEIGHT_LIGHT = '300';
const FONT_WEIGHT_REGULAR = '400';
const FONT_WEIGHT_MEDIUM = '500';
const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const PRIMARY_FONT_LIGHT = {
  family: PRIMARY_FONT_FAMILY,
  weight: FONT_WEIGHT_LIGHT,
};
export const PRIMARY_FONT_REGULAR = {
  family: PRIMARY_FONT_FAMILY,
  weight: FONT_WEIGHT_REGULAR,
};
export const PRIMARY_FONT_MEDIUM = {
  family: PRIMARY_FONT_FAMILY,
  weight: FONT_WEIGHT_MEDIUM,
};
export const PRIMARY_FONT_BOLD = {
  family: PRIMARY_FONT_FAMILY,
  weight: FONT_WEIGHT_BOLD,
};
