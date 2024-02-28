import styled from '@emotion/styled';
import mediaQueries from '../../styles/mediaQueries';
import colors from '../../styles/colors';
import space from '../../styles/space';
import ScrollLink from '../ScrollLink/ScrollLink';

export const CallToActionWrapper = styled('section')({
  backgroundColor: colors.tertiary,
  padding: `${space.large} 0`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  [mediaQueries.medium]: {
    flexDirection: 'row',
  },

  [mediaQueries.large]: {
    padding: `${space.xxlarge} 0`,
  },
});

export const CallToActionTitle = styled('h3')({
  fontSize: '2.5rem',
  color: colors.white,
  marginBottom: space.large,

  [mediaQueries.medium]: {
    marginBottom: space.none,
    marginRight: `${space.large}`,
  },
});

export const CallToActionLink = styled(ScrollLink)({
  padding: '1.5rem 6rem',
  fontSize: '18px',
  lineHeight: 1.4,
  backgroundColor: colors.primary,
  borderRadius: '4rem',
  color: colors.white,
  transition: '.3s all ease',
  fontSize: '1.8rem',
  lineHeight: '1.4',
  fontWeight: 'bold',

  [mediaQueries.medium]: {
    padding: '1.5rem 9rem',
  },

  '&:hover': {
    backgroundColor: colors.secondary,
  }
});