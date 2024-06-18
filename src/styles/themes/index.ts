import { typography } from '../general/typography';
import { colors } from './default/colors';

export const theme = {
  default: {
    colors,
    typography,
  },
};

export type ThemeType = typeof theme.default;
