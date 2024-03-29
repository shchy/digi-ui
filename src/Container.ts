import styled from 'styled-components';
import { media, spaces, useTypography } from './styles';

export const Container = styled.div`
  margin: 0 auto;

  ${media.lessThan('small')`
    width: calc(100% - ${spaces.S} - ${spaces.S});
    padding: 0 ${spaces.S};
  `}
  ${media.between('small', 'medium')`
    width: 928px;
    min-width: 928px;
  `}
  ${media.between('medium', 'large')`
    width: 1312px;
    min-width: 1312px;
  `}
  ${media.greaterThan('large')`
    width: 1696px;
    min-width: 1696px;
  `}

  ${(props) => useTypography('Body/L', 'neutral-solid-grey-900')}
`;
