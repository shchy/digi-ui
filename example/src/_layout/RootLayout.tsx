import {
  Text,
  MenuItem,
  UtilityLink,
  Scaffold,
  HeaderProps,
  SideMenuPage,
} from '../../../src';
import { useLocation, useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';

interface Props {
  sideMenus?: MenuItem[];
}

export const RootLayout: FC<React.PropsWithChildren<Props>> = ({
  sideMenus,
  children,
}) => {
  const navigate = useNavigate();

  const logo = (
    <Text
      onClick={() => navigate('/')}
      $type="Headline/XXS"
      style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}
    >
      デジタル庁
    </Text>
  );
  const globalMenu = [
    { label: 'カタログ', type: 'simple', onClick: () => navigate('/') },
  ] as MenuItem[];
  const items = [
    <UtilityLink
      beforeIcon={{ name: 'Child' }}
      afterIcon={{ name: 'NewWindow' }}
      href="https://www.google.com"
      target="_blank"
    >
      Google
    </UtilityLink>,
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  const headerInfo = {
    logo: logo,
    globalMenus: globalMenu,
    items: items,
    drawerPosition: 'full',
    isDrawerOpen: isDrawerOpen,
    onChangeOpenDrawer(isOpen) {
      setIsDrawerOpen(isOpen);
    },
    pageMenus: sideMenus,
  } as HeaderProps;

  return (
    <Scaffold header={headerInfo}>
      <SideMenuPage menus={sideMenus ?? []}>{children}</SideMenuPage>
    </Scaffold>
  );
};
