import { ReactNode, ReactElement, FC } from 'react';
import styled, { css } from 'styled-components';
import { ByScreen, media, spaces } from './styles';

interface ICol
  extends ByScreen<number | 'auto' | 'initial' | 'none' | undefined> {
  children?: ReactNode;
}

export const Col: FC<ICol> = (props) => {
  return <InnerCol $weight={props}>{props.children}</InnerCol>;
};
const InnerCol = styled.div<{
  $weight: ByScreen<number | 'auto' | 'initial' | 'none' | undefined>;
}>`
  ${(props) => {
    return css`
      ${media.lessThan('small')`
        flex: ${
          props.$weight.small ??
          props.$weight.medium ??
          props.$weight.large ??
          'initial'
        };
      `}
      ${media.between('small', 'medium')`
        flex: ${
          props.$weight.small ??
          props.$weight.medium ??
          props.$weight.large ??
          'initial'
        };
      `}
      ${media.between('medium', 'large')`
        flex: ${
          props.$weight.medium ??
          props.$weight.small ??
          props.$weight.large ??
          'initial'
        };
      `}
      ${media.greaterThan('large')`
        flex: ${
          props.$weight.large ??
          props.$weight.medium ??
          props.$weight.small ??
          'initial'
        };
      `}
    `;
  }}
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
