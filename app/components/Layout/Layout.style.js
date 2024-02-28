import styled from '@emotion/styled';
import mediaQueries from '../../styles/mediaQueries';
import space from '../../styles/space';

export const ContainerWrapper = styled('div')({
  maxWidth: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingRight: space.medium,
  paddingLeft: space.medium,

  [mediaQueries.small]: {
    maxWidth: '55rem',
  },

  [mediaQueries.medium]: {
    maxWidth: '72rem',
  },

  [mediaQueries.large]: {
    maxWidth: '96rem',
  },

  [mediaQueries.xlarge]: {
    maxWidth: '120rem',
  },
});



