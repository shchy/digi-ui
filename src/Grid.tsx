import { ReactNode, ReactElement, FC } from 'react';
import styled, { css } from 'styled-components';
import { ByScreen, media, spaces } from './styles';

interface ICol
  extends ByScreen<number | 'auto' | 'initial' | 'none' | undefined> {
  justifyContent?: string;
  alignItems?: string;
  children?: ReactNode;
}

export const Col: FC<ICol> = ({
  justifyContent,
  alignItems,
  children,
  ...rest
}) => {
  return (
    <InnerCol
      $weight={rest}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </InnerCol>
  );
};
const InnerCol = styled.div<{
  $weight: ByScreen<number | 'auto' | 'initial' | 'none' | undefined>;
  justifyContent?: string;
  alignItems?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  min-width: 0;
  min-height: 0;
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
  isSlim?: boolean;
  children: ReactElement<ICol>[] | ReactElement<ICol>;
}> = (props) => {
  return <InnerRow isSlim={props.isSlim}>{props.children}</InnerRow>;
};
const InnerRow = styled.div<{ isSlim?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin: ${({ isSlim }) => (isSlim ? spaces.XXS : spaces.M)} 0;
  ${media.lessThan('small')`
    flex-direction: column;
  `}
`;
