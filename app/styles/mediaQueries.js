import breakpoints from './breakpoints';

const px = 'px';
export const minusOne = (breakpoint) => {
  const reduceOne = (breakpoint.slice(0, -2) - 1).toString().concat(px);
  return reduceOne;
};

const mediaQueries = {
  untilSmall: `@media screen and (max-width: ${minusOne(breakpoints[0])})`,
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  untilMedium: `@media screen and (max-width: ${minusOne(breakpoints[1])})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  untilLarge: `@media screen and (max-width: ${minusOne(breakpoints[2])})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
  untilXlarge: `@media screen and (max-width: ${minusOne(breakpoints[3])})`,
  xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
};

export default mediaQueries;
