import { FC } from 'react';
import { MenuProps, MenuBase } from './MenuBase';

type Props = Omit<MenuProps, 'selected' | 'disabled' | 'onClick'>;

export const MenuLabel: FC<Props> = (props) => {
  const textType = props.textType ?? 'Button';
  return <MenuBase {...props} textType={textType} />;
};
