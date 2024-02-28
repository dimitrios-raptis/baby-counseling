import styled from '@emotion/styled';
import mediaQueries from '../../styles/mediaQueries';
import colors from '../../styles/colors';
import Image from 'next/image';
import space from '../../styles/space';
import ScrollLink from '../ScrollLink/ScrollLink';

export const NavWrapper = styled('nav')({
  backgroundColor: colors.white,
  padding: `0 ${space.large}`,
  position: 'fixed',
  left: '0',
  top: '0',
  right: '0',
  zIndex: '1008',
  background: colors.white,
  boxShadow: '0 0 2px 3px rgba(0, 0, 0, 0.2)',
});

export const NavContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${space.xsmall} 0`,
  maxWidth: '120rem',
  marginLeft: 'auto',
  marginRight: 'auto',

  [mediaQueries.large]: {
    padding: `${space.large} 0`,
  },
});

export const BurgerWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Logo = styled(Image)({
  borderRadius: '50%',

  [mediaQueries.untilLarge]: {
    width: `15rem`,
    height: `5rem`,
  },
});

export const BurgerBtn = styled('button')({
  display: 'inline-block',
  position: 'relative',
  width: '48px',
  height: '48px',
  lineHeight: '48px',
  cursor: 'pointer',
  color: '#29293a',
  backgroundColor: 'transparent',
  border: 'none',
  marginRight: space.small,

  [mediaQueries.large]: {
    display: 'none',
  },

  'span, span:before, span:after': {
    width: '24px',
    height: '4px',
    backgroundColor: '#29293a',
    backfaceVisibility: 'hidden',
    borderRadius: '0',
  },

  'span': {
    position: 'relative',
    display: 'block',
    margin: 'auto',
    transition: '.3s all ease',
    transform: 'rotate(180deg)',

    '&:before,:after': {
      content: '""',
      position: 'absolute',
      left: '0',
      transition: '.3s all ease',
      transformOrigin: '1.71429px center',
    },

    '&:before': {
      top: '-8px',
    },

    '&:after': {
      top: '8px',
    }
  },

  // Active button
  '&.active span': {
    transform: 'rotate(360deg)',

    '&:before,:after': {
      top: '0',
      width: '15px',
    },

    '&:before': {
      transform: 'rotate3d(0, 0, 1, -40deg)',
    },

    '&:after': {
      transform: 'rotate3d(0, 0, 1, 40deg)',
    },
  },


});

export const Menu = styled('div')({
  display: 'none',
  alignItems: 'center',

  [mediaQueries.large]: {
    display: 'flex',
  },
});

export const MenuList = styled('ul')({
  transition: 'all 1s ease-out',
});

export const MenuListItem = styled('li')({
  display: 'inline-block',
});

export const MenuLink = styled(ScrollLink)({
  transition: 'all 1s ease',
  position: 'relative',
  display: 'inline-block',
  color: colors.offblack,
  fontSize: '2.3rem',
  lineHeight: '1.33',
  transition: '.25s',
  padding: `${space.small} 0`,
  borderBottom: '3px solid transparent',
  marginBottom: '-1px',
  marginLeft: space.large,

  [mediaQueries.large]: {
    marginLeft: space.xlarge,
  },

  '& > *:first-of-type': {
    marginLeft: 0,
  },

  '&.active': {
    borderColor: colors.primary,
    color: colors.primary,
  },

  '&:hover': {
    borderColor: colors.primary,
    color: colors.primary,
  },
});


// Mobile Menu
export const MobileMenuWrapper = styled('div')({
  position: 'fixed',
  left: '0',
  top: '-56px',
  bottom: '-56px',
  zIndex: '1007',
  width: '270px',
  padding: '172px 0 81px',
  overflowY: 'auto',
  overflowX: 'hidden',
  fontSize: '14px',
  lineHeight: '34px',
  transform: 'translateX(-110%)',
  color: colors.white,
  background: colors.white,
  boxShadow: '0 0 2px 3px rgba(0, 0, 0, 0.05)',
  transition: '.3s all ease',

  '&.active': {
    transform: 'translateX(0)',
  },

  [mediaQueries.large]: {
    display: 'none',
  },
});

export const MobileMenuList = styled('ul')({
  display: 'block',
  margin: `${space.base} 0`,
  height: 'auto',
  textAlign: 'left',
});

export const MobileMenuListItem = styled('li')({
  textAlign: 'left',
  marginBottom: space.xsmall,
});

export const MobileMenuLink = styled(ScrollLink)({
  transition: 'all 0.2s ease',
  color: colors.offblack,
  background: colors.white,
  display: 'block',
  padding: `${space.small} ${space.xxlarge} ${space.small} ${space.base}`,

  [mediaQueries.large]: {
    marginLeft: space.xlarge,
  },

  '& > *:first-of-type': {
    marginLeft: 0,
  },

  '&.active': {
    color: colors.white,
    background: colors.primary,
  },

  '&:hover': {
    color: colors.white,
    background: colors.primary,
  },
});
