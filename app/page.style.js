import styled from '@emotion/styled';
import mediaQueries from './styles/mediaQueries';

export const MainWrapper = styled('div')({
  paddingTop: '58px',

  [mediaQueries.large]: {
    paddingTop: '114px',
  },
});