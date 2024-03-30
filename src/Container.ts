import styled from 'styled-components';
import { media, spaces, useTypography } from './styles';

export const Container = styled.div`
  margin: 0 auto;

  ${media.lessThan('small')`
    width: calc(100% - ${spaces.M} - ${spaces.M});
    padding: 0 ${spaces.M};
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

  ${useTypography('Body/L', 'neutral-solid-grey-900')}
`;
