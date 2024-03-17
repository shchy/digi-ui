import styled from 'styled-components';
import { useTypography } from './styles';

export const Layout = styled.div`
  ${(props) => useTypography('Body/L', 'neutral-solid-grey-900')}
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    width: 928px;
  }
  @media screen and (min-width: 1440px) {
    width: 1312px;
  }
  @media screen and (min-width: 1920px) {
    width: 1696px;
  }
`;
