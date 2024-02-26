import styled from '@emotion/styled';
import mediaQueries from '../../styles/mediaqueries';
import colors from '../../styles/colors';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import space from '../../styles/space';

export const Wrapper = styled('div')({
  width: '100%',
  height: '500px',
});

export const Slide = styled(SwiperSlide)({
  width: '100%',
  height: '500px',
});

export const HeroWrapper = styled('div')({
  position: 'relative',
  width: '100vw',
  height: '50vh',
});

export const HeroContentWrapper = styled('div')({
  height: '50vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
});

export const HeroContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: `rgba(0, 0, 0, 0.7)`,
  padding: space.large,
  color: colors.white,
  width: '27rem',

  [mediaQueries.medium]: {
    width: '35rem',
    padding: space.xlarge,
  },

  [mediaQueries.large]: {
    width: '45rem',
  },

  [mediaQueries.xlarge]: {
    width: '50rem',
    padding: space.xxlarge,
  },
});

export const SlideImage = styled(Image)({
  objectFit: 'cover',
  objectPosition: 'center',
  zIndex: '-1',
});

export const HeroTitle = styled('h1')({
  marginBottom: space.base,
  fontSize: '2.2rem',

  [mediaQueries.large]: {
    fontSize: '2.7rem',
  },

  [mediaQueries.xlarge]: {
    fontSize: '3.2rem',
  },
});

export const HeroSubtitle = styled('p')({
  fontSize: '1.5rem',

  [mediaQueries.large]: {
    fontSize: '1.9rem',
  },

  [mediaQueries.xlarge]: {
    fontSize: '2rem',
  },
});
