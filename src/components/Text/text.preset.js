import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const BASE = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: colors.white,
};

const BASE_MEDIUM = {
  fontFamily: typography.medium,
  fontSize: 20,
  color: colors.white,
};

const BASE_SEMIBOLD = {
  fontFamily: typography.semibold,
  color: colors.white,
};

export const presets = {
  default: BASE,
  medium: BASE_MEDIUM,
  small: {
    ...BASE,
    color: colors.black,
  },
  h1: {
    ...BASE_SEMIBOLD,
    fontSize: 24,
  },
  h2: {
    ...BASE_SEMIBOLD,
    fontSize: 20,
  },
  h3: {
    ...BASE_SEMIBOLD,
    fontSize: 18,
  },
  h4: {
    ...BASE_MEDIUM,
    fontSize: 14,
    color: colors.black,
  },
};
