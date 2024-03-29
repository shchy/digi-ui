import { ReactNode, ReactElement, FC } from 'react';
import styled, { css } from 'styled-components';
import { ByScreen, media, spaces } from './styles';
import { MenuItem, MenuList } from './MenuList';
import { Icon } from './icons';

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

export const Header: FC<{
  logo: React.ReactNode;
  items: React.ReactNode[];
  globalMenus: MenuItem[];
  globalMenuAlign?: 'start' | 'center' | 'end';
  isSlim?: boolean;
}> = ({ logo, items, globalMenus, isSlim }) => {
  return (
    <ContainerFull $isSlim={isSlim}>
      <LogoFrame $isSlim={isSlim}>{logo}</LogoFrame>
      <ItemsFrame $isSlim={isSlim}>
        {items.map((x, i) => (
          <span key={i}>{x}</span>
        ))}
      </ItemsFrame>
      <GlobalMenuFrame $isSlim={isSlim}>
        <MenuList
          items={globalMenus}
          direction="row"
          dropdownDirection="bottom"
        />
      </GlobalMenuFrame>
      <HamburgerFrame>
        <Icon name="Menu" />
      </HamburgerFrame>
    </ContainerFull>
  );
};

const LogoFrame = styled.div<{ $isSlim?: boolean }>`
  grid-row: 1/2;
  grid-column: 1/2;
`;
const ItemsFrame = styled.div<{ $isSlim?: boolean }>`
  grid-row: 1/2;
  grid-column: ${(props) => (props.$isSlim ? '3/4' : '2/3')};
  justify-self: end;
  display: flex;
  flex-direction: row;
  gap: ${spaces.S};

  ${media.lessThan('small')`
    grid-column: 2/3;
  `}
`;
const GlobalMenuFrame = styled.div<{
  $isSlim?: boolean;
  $globalMenuAlign?: 'start' | 'center' | 'end';
}>`
  ${(props) => {
    if (!props.$isSlim) {
      return css`
        grid-row: 2/3;
        grid-column: 1/3;
        justify-self: ${props.$globalMenuAlign ?? 'start'};
      `;
    } else {
      return css`
        grid-row: 1/2;
        grid-column: 2/3;
        justify-self: ${props.$globalMenuAlign ?? 'start'};
        margin-left: ${spaces.L};
      `;
    }
  }}
  ${media.lessThan('small')`
    display: none;
  `}
`;
const HamburgerFrame = styled.div`
  display: none;
  ${media.lessThan('small')`
    grid-row: 1/2;
    grid-column: 3/4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: ${spaces.S};
  `}
`;

const ContainerFull = styled.div<{ $isSlim?: boolean }>`
  display: grid;
  align-items: center;
  gap: ${spaces.XXS};
  margin: ${spaces.S};
  ${(props) => {
    if (!props.$isSlim) {
      return css`
        grid-template-columns: auto 1fr;
        grid-template-rows: ${`${spaces.XL} calc(${spaces.XL} - ${spaces.XS})`};
      `;
    } else {
      return css`
        grid-template-columns: auto 1fr auto;
        grid-template-rows: ${`calc(${spaces.XL} - ${spaces.XS})`};
      `;
    }
  }}
  ${media.lessThan('small')`
    grid-template-columns: auto 1fr auto;
    grid-template-rows: ${`calc(${spaces.XL} - ${spaces.XS})`};
  `}
`;
