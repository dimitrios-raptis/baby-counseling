import styled from '@emotion/styled';
import mediaQueries from '../../styles/mediaQueries';
import colors from '../../styles/colors';
import space from '../../styles/space';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TeamWrapper = styled('section')({
  padding: `${space.large} ${space.large}`,

  [mediaQueries.large]: {
    padding: `${space.xxlarge} ${space.xxlarge}`,
  },
});

export const TeamSectionTitle = styled('h2')({
  color: colors.greydark,
  fontSize: '3rem',
  marginBottom: space.xxlarge,
  textAlign: 'center',
});

export const TeamCardsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',

  [mediaQueries.medium]: {
    flexDirection: 'row',
  },
});

export const TeamCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: space.large,

  [mediaQueries.medium]: {
    marginBottom: space.none,
  },

  '&:last-of-type': {
    marginBottom: space.none,
  }
});

export const TeamImage = styled(Image)({
  borderRadius: space.xsmall,
  overflow: 'hidden',
  alignSelf: 'center',
});

export const TeamContainer = styled('div')({
  padding: `0 ${space.large}`,

  [mediaQueries.large]: {
    padding: `0 ${space.xlarge}`,
  },
});

export const TeamTitle = styled('h6')({
  color: colors.offblack,
  marginTop: space.large,
  color: colors.tertiary,
  fontSize: '1.8rem',
  marginBottom: space.xsmall,
});

export const TeamSubtitle = styled('p')({
  color: colors.tertiary,
  fontSize: '1.4rem',
  marginBottom: space.medium,
});

export const TeamText = styled('p')({
  fontSize: '1.4rem',
  color: colors.greydark,
  lineHeight: '2.4rem',
});

export const TeamSocials = styled('div')({
  marginTop: space.medium,
});

export const TeamSocialIcon = styled(FontAwesomeIcon)({
  marginRight: space.medium,
  color: colors.greymid,
  transition: '.3s all ease',
  cursor: 'pointer',

  '&:hover': {
    color: colors.tertiary,
  }
});