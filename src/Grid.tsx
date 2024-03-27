import { ReactNode, ReactElement, FC } from 'react';
import styled from 'styled-components';
import { spaces } from './styles';

interface ICol {
  desktop?: number | 'auto' | 'initial' | 'none';
  tablet?: number | 'auto' | 'initial' | 'none';
  mobile?: number | 'auto' | 'initial' | 'none';
  children?: ReactNode;
}

export const Col: FC<ICol> = (props) => {
  return (
    <InnerCol
      $desktop={props.desktop}
      $tablet={props.tablet}
      $mobile={props.mobile}
    >
      {props.children}
    </InnerCol>
  );
};
const InnerCol = styled.div<{
  $desktop?: number | 'auto' | 'initial' | 'none';
  $tablet?: number | 'auto' | 'initial' | 'none';
  $mobile?: number | 'auto' | 'initial' | 'none';
}>`
  @media screen and (min-width: 1024px) {
    flex: ${(props) =>
      props.$mobile ?? props.$tablet ?? props.$desktop ?? 'initial'};
  }
  @media screen and (min-width: 1440px) {
    flex: ${(props) =>
      props.$tablet ?? props.$desktop ?? props.$mobile ?? 'initial'};
  }
  @media screen and (min-width: 1920px) {
    flex: ${(props) =>
      props.$desktop ?? props.$tablet ?? props.$mobile ?? 'initial'};
  }
`;

export const Row: FC<{
  children: ReactElement<ICol>[] | ReactElement<ICol>;
}> = (props) => {
  return <InnerRow>{props.children}</InnerRow>;
};
const InnerRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin: ${spaces.M} 0;
`;
