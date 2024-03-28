import { FC } from 'react';
import { MenuProps, MenuItemBase } from './MenuItemBase';

export const Menu: FC<MenuProps> = (props) => {
  return <MenuItemBase {...props} />;
};
