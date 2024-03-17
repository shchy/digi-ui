import { ReactNode, ReactElement, FC } from 'react';
import styled from 'styled-components';
import { spaces } from './styles';

interface ICol {
  weight: number | 'auto' | 'initial' | 'none';
  children?: ReactNode;
}

export const Col: FC<ICol> = (props) => {
  return <InnerCol $w={props.weight}>{props.children}</InnerCol>;
};
const InnerCol = styled.div<{ $w: number | 'auto' | 'initial' | 'none' }>`
  flex: ${(props) => props.$w};
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
