import { useLocation, useNavigate } from 'react-router-dom';
import { MenuItem, MenuItemSimple } from 'digi-ui';

type MenuItemWithPath = { path?: string } & MenuItem;

export const useMenus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const selectMenu = (item: MenuItemWithPath) => {
    if (!item.path) return;
    // setIsDrawerOpen(false);
    navigate(item.path);
  };

  // TODO あとでいい方法考える
  const addOnClick = (items: MenuItemWithPath[]) => {
    for (const item of items) {
      if (!Object.keys(item).includes('path')) continue;
      const selectableMenu = item as MenuItemSimple;
      selectableMenu.onClick = () => selectMenu(selectableMenu);
      selectableMenu.selected =
        (selectableMenu as MenuItemWithPath).path === location.pathname;
    }
  };

  const catalogMenuItems: MenuItemWithPath[] = [
    {
      type: 'simple',
      label: 'ボタン',
      path: '/',
    },
    {
      type: 'simple',
      label: 'テキストフィールド',
      path: '/textfield',
    },
    {
      type: 'simple',
      label: 'テキストエリア',
      path: '/textarea',
    },
    {
      type: 'simple',
      label: 'セレクタ',
      path: '/selector',
    },
    {
      type: 'simple',
      label: 'Checkbox',
      path: '/checkbox',
    },
    {
      type: 'simple',
      label: 'CheckboxList',
      path: '/checkboxs',
    },
    {
      type: 'simple',
      label: 'RadioButton',
      path: '/radiobutton',
    },
    {
      type: 'simple',
      label: 'RadioButtonList',
      path: '/radiobuttons',
    },
    {
      type: 'simple',
      label: 'Icons',
      path: '/icons',
    },
    {
      type: 'simple',
      label: 'DisableTest',
      disabled: true,
    },
  ];
  addOnClick(catalogMenuItems);

  return {
    catalogMenuItems,
  };
};
