import { FC } from 'react';
import { MenuProps, MenuBase } from './MenuBase';

export const Menu: FC<MenuProps> = (props) => {
  return <MenuBase {...props} />;
};
