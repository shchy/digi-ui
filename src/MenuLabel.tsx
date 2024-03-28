import { FC } from 'react';
import { MenuProps, MenuItemBase } from './MenuItemBase';

type Props = Omit<MenuProps, 'selected' | 'disabled' | 'onClick'>;

export const MenuLabel: FC<Props> = (props) => {
  const textType = props.textType ?? 'Button';
  return <MenuItemBase {...props} textType={textType} />;
};
