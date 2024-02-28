import styled from '@emotion/styled';
import mediaQueries from '../../styles/mediaqueries';
import colors from '../../styles/colors';
import space from '../../styles/space';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollLink from '../ScrollLink/ScrollLink';

export const FooterWrapper = styled('section')({
  backgroundColor: colors.greydark,
  padding: `${space.large} ${space.large}`,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',

  [mediaQueries.small]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  [mediaQueries.large]: {
    justifyContent: 'space-around',
    flexWrap: 'no-wrap',
    padding: `${space.xxlarge} ${space.xlarge}`,
  },
});

export const FooterColumn = styled('section')({
  width: '100%',
  color: colors.white,
  display: 'flex',
  flexDirection: 'column',
  padding: `0 ${space.large}`,
  marginBottom: space.xxlarge,

  [mediaQueries.small]: {
    width: '50%',
  },

  [mediaQueries.large]: {
    width: '25%',
  },
});

export const Logo = styled(Image)({
  borderRadius: '50%',
  marginBottom: space.large,

  [mediaQueries.untilSmall]: {
    width: `15rem`,
    height: `5rem`,
  },
});

export const FooterInfoText = styled('p')({
  color: colors.white,
  fontSize: '1.4rem',
  lineHeight: '2.4rem',
});

export const FooterTitle = styled('h5')({
  fontSize: '2rem',
  marginBottom: space.large
});

export const FooterContactInfo = styled('div')({
  display: 'flex',
  marginBottom: space.medium
});

export const ContactIcon = styled(FontAwesomeIcon)({
  color: colors.primary,
  marginRight: space.medium,
  marginTop: space.xsmall,
});

export const ContactText = styled('p')({
  color: colors.white,
  lineHeight: '2.4rem',
});

export const ContactLink = styled('a')({
  color: colors.white,
  transition: '.3s all ease',

  '&:hover': {
    color: colors.primary,
  }
});

export const LinksListItem = styled('li')({
  color: colors.white,
  marginBottom: space.medium,
});

export const ListLink = styled(ScrollLink)({
  color: colors.white,
  transition: '.3s all ease',
  fontSize: '1.8rem',
  fontWeight: 'bold',

  '&:hover': {
    color: colors.primary,
  }
});

export const FooterCopy = styled('div')({
  backgroundColor: colors.offblack,
  padding: `${space.small} ${space.xlarge}`,

  [mediaQueries.large]: {
    padding: `${space.small} ${space.xxlarge}`,
  }
});

export const FooterCopyText = styled('p')({
  color: 'rgba(255, 255, 255, .4)',
});
