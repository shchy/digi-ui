import { FC } from 'react';
import { MenuItemBase } from './MenuItemBase';
import { MenuItemSimple } from './MenuList';

type Props = Omit<MenuItemSimple, 'type'>;

export const MenuItemSimpleComponent: FC<Props> = (props) => {
  return <MenuItemBase {...props} />;
};
