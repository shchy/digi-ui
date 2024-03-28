import { FC } from 'react';
import { MenuItemBase } from './MenuItemBase';
import { MenuItemSectionHeader } from './MenuList';

type Props = Omit<MenuItemSectionHeader, 'type'>;

export const MenuItemSectionHeaderComponent: FC<Props> = (props) => {
  const textType = props.textType ?? 'Button';
  return <MenuItemBase {...props} textType={textType} />;
};
