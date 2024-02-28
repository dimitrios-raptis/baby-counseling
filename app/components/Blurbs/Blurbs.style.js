import styled from '@emotion/styled';
import mediaQueries from '../../styles/mediaqueries';
import colors from '../../styles/colors';
import space from '../../styles/space';

export const BlurbsWrapper = styled('section')({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',

  [mediaQueries.large]: {
    flexWrap: 'no-wrap',
  },
});

export const Blurb = styled('div')({
  position: 'relative',
  padding: '25px',
  color: colors.white,
  backgroundColor: colors.primary,
  flexGrow: '1',
  maxWidth: '100%',
  flex: '0 0 auto',
  width: '100%',

  [mediaQueries.small]: {
    width: '50%',
  },

  [mediaQueries.large]: {
    width: '25%',
  },

  '&:first-of-type': {
    backgroundColor: colors.primary,
  },

  '&:nth-of-type(2)': {
    backgroundColor: colors.secondary,
  },

  '&:nth-of-type(3)': {
    backgroundColor: colors.tertiary,
  },

  '&:last-of-type': {
    backgroundColor: colors.quartenary,
  }
});

export const BlurbIcon = styled('div')({
  display: 'block',
});

export const BlurbTitle = styled('h6')({
  marginTop: space.medium,
  color: colors.white,
});

export const BlurbText = styled('p')({
  opacity: '.8',
  marginTop: space.xsmall,
});