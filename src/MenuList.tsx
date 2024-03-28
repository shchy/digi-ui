import React, { FC } from 'react';
import styled from 'styled-components';

import { spaces, textType } from './styles';
import { IconProps } from './icons';
import { MenuItemSectionHeaderComponent } from './MenuItemSectionHeaderComponent';
import { MenuItemSimpleComponent } from './MenuItemSimpleComponent';
import { MenuItemDropdownComponent } from './MenuItemDropdownComponent';

export type MenuType = 'simple' | 'section-header';

export interface MenuItemSectionHeader {
  type: 'section-header';
  label: string;
  textType?: textType;
}
export interface MenuItemSelectable {
  label: string;
  textType?: textType;
  selected?: boolean;
  disabled?: boolean;
}
export interface MenuItemSimple extends MenuItemSelectable {
  type: 'simple';
  beforeIcon?: IconProps;
  afterIcon?: IconProps;
  onClick?: () => void;
}
export interface MenuItemDropdown extends MenuItemSelectable {
  type: 'dropdown';
  beforeIcon?: IconProps;
  direction?: 'top' | 'left' | 'bottom' | 'right';
  align?: 'start' | 'end';
  children?: React.ReactNode;
  menuItems?: MenuItem[];
}

export type MenuItem =
  | MenuItemSectionHeader
  | MenuItemSimple
  | MenuItemDropdown;

export const MenuList: FC<{
  items: MenuItem[];
  direction: 'row' | 'column';
  align?: 'start' | 'center' | 'end';
  crossAlign?: 'start' | 'center' | 'end';
  dropdownDirection?: 'top' | 'left' | 'bottom' | 'right';
}> = ({ items, direction, align, crossAlign, dropdownDirection }) => {
  const render = (key: React.Key, item: MenuItem) => {
    switch (item.type) {
      case 'section-header':
        return <MenuItemSectionHeaderComponent key={key} {...item} />;
      case 'simple':
        return <MenuItemSimpleComponent key={key} {...item} />;
      case 'dropdown':
        return (
          <MenuItemDropdownComponent
            key={key}
            {...item}
            direction={dropdownDirection}
          />
        );

      default:
        return <></>;
    }
  };
  return (
    <Root $direction={direction} $align={align} $crossAlign={crossAlign}>
      {items.map((item, i) => render(`${i}-${item.label}`, item))}
    </Root>
  );
};

const Root = styled.div<{
  $direction: 'row' | 'column';
  $align?: 'start' | 'center' | 'end';
  $crossAlign?: 'start' | 'center' | 'end';
}>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  justify-content: ${(props) => props.$align};
  align-items: ${(props) => props.$crossAlign};
  /* gap: ${spaces.XXS}; */
`;
