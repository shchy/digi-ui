import { FC } from 'react';
import { useMenus } from './menus';
import { RootLayout } from './RootLayout';

export const CatalogLayout: FC<React.PropsWithChildren> = ({ children }) => {
  const { catalogMenuItems } = useMenus();

  return <RootLayout sideMenus={catalogMenuItems}>{children}</RootLayout>;
};
