import styled from '@emotion/styled';
import mediaQueries from '../../styles/mediaqueries';
import space from '../../styles/space';

export const ContainerWrapper = styled('div')({
  maxWidth: '50rem',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingRight: space.medium,
  paddingLeft: space.medium,

  [mediaQueries.medium]: {
    maxWidth: '60rem',
  },

  [mediaQueries.large]: {
    maxWidth: '96rem',
  },

  [mediaQueries.xlarge]: {
    maxWidth: '100rem',
  },
});



