import React, { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { media, spaces } from './styles';
import { MenuItem, MenuList } from './MenuList';
import { IconButton } from './IconButton';
import { Drawer } from './Drawer';
import { Container } from './Container';
import { Divider } from './Divider';

export const Header: FC<{
  logo: React.ReactNode;
  items: React.ReactNode[];
  globalMenus: MenuItem[];
  globalMenuAlign?: 'start' | 'center' | 'end';
  isSlim?: boolean;
  drawerPosition?: 'full' | 'left' | 'right';
  isDrawerOpen?: boolean;
  onChangeOpenDrawer?: (isOpen: boolean) => void;
}> = ({
  logo,
  items,
  globalMenus,
  isSlim,
  drawerPosition,
  isDrawerOpen,
  onChangeOpenDrawer,
}) => {
  const [isDrawerOpenInner, setIsDrawerOpenInner] = useState(
    isDrawerOpen ?? false
  );
  const setIsDrawerOpen = (v: boolean) => {
    setIsDrawerOpenInner(v);
    if (isDrawerOpen !== v) {
      onChangeOpenDrawer && onChangeOpenDrawer(v);
    }
  };
  useEffect(() => {
    if (isDrawerOpen !== undefined) {
      setIsDrawerOpen(isDrawerOpen);
    }
  }, [isDrawerOpen]);

  const drawerDropdownDirection = () => {
    switch (drawerPosition) {
      case 'left':
        return 'right';
      case 'right':
        return 'left';
      case 'full':
      default:
        return 'bottom';
    }
  };

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
        <IconButton
          label={isDrawerOpenInner ? '閉じる' : 'メニュー'}
          name={isDrawerOpenInner ? 'Close' : 'Menu'}
          direction="column"
          onClick={() => setIsDrawerOpen(!isDrawerOpenInner)}
        />
      </HamburgerFrame>
      <Drawer
        isOpen={isDrawerOpenInner}
        position={drawerPosition}
        onClose={() => drawerPosition !== 'full' && setIsDrawerOpen(false)}
      >
        {drawerPosition !== 'full' && (
          <SideDrawerContainer>
            <CloseContainerInDrawer>
              <IconButton
                label="閉じる"
                name="Close"
                direction="column"
                onClick={() => setIsDrawerOpen(false)}
              />
            </CloseContainerInDrawer>
            <Divider $type="dashed" />
            <MenuList
              items={globalMenus}
              direction="column"
              dropdownDirection={drawerDropdownDirection()}
            />
          </SideDrawerContainer>
        )}
        {drawerPosition === 'full' && (
          <MenuList
            items={globalMenus}
            direction="row"
            dropdownDirection={drawerDropdownDirection()}
          />
        )}
      </Drawer>
    </ContainerFull>
  );
};

const SideDrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CloseContainerInDrawer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: ${spaces.S};
`;
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
    align-items: end;
    margin-left: ${spaces.S};
  `}
`;

const ContainerFull = styled(Container)<{ $isSlim?: boolean }>`
  position: relative;
  display: grid;
  align-items: center;
  gap: ${spaces.XXS};
  padding: ${spaces.S};
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