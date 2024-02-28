import styled from '@emotion/styled';
import mediaQueries from '../../styles/mediaQueries';
import colors from '../../styles/colors';
import space from '../../styles/space';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const OffersWrapper = styled('section')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: `${space.xxxlarge} 0`,
  position: 'relative',

  [mediaQueries.small]: {
    padding: `${space.xxlarge} 0`,
  },
});

export const OffersIntroWrapper = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '74rem',
  padding: `0 ${space.large}`,
});

export const OffersTitle = styled('h2')({
  fontSize: '2.5rem',
  textAlign: 'center',
});

export const OffersIntro = styled('P')({
  marginTop: space.large,
  textAlign: 'center',
});

export const OffersContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: space.xlarge,
  padding: `0 ${space.large}`,

  [mediaQueries.small]: {
    padding: `0 ${space.xxlarge}`,
  },
});

export const Offer = styled('div')({
  position: 'relative',
  padding: '25px',
  flexGrow: '1',
  maxWidth: '100%',
  flex: '0 0 auto',
  width: '100%',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  [mediaQueries.small]: {
    width: '50%',
  },

  [mediaQueries.large]: {
    width: '33.3333%',
  },
});

export const OfferIcon = styled(FontAwesomeIcon)({
  display: 'block',
  color: colors.primary,
});

export const OfferTitle = styled('h6')({
  marginTop: space.medium,
  marginBottom: space.medium,
  textAlign: 'center',
  color: colors.offblack,

  '&:after': {
    content: "''",
    position: 'absolute',
    zIndex: '-1',
    left: '50%',
    top: '-8px',
    height: '7rem',
    width: '7rem',
    backgroundColor: colors.secondary,
    borderRadius: '50%',
    display: 'inline-block',
  },
});

export const OfferText = styled('p')({
  opacity: '.8',
  marginTop: space.xsmall,
  textAlign: 'center',
  color: colors.greydark,
  lineHeight: space.large,
});