import { useLocation, useNavigate } from 'react-router-dom';
import { MenuItem, MenuItemSimple } from '../../../src';

type MenuItemWithPath = { path?: string } & MenuItem;

export const useMenus = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectMenu = (item: MenuItemWithPath) => {
    if (!item.path) return;
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
    { type: 'section-header', label: 'カタログ' },
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
      label: 'Tiles',
      path: '/tiles',
    },
    {
      type: 'simple',
      label: 'Dropdown',
      path: '/dropdown',
    },
    {
      type: 'simple',
      label: 'Table',
      path: '/tables',
    },
    {
      type: 'simple',
      label: 'DisableTest',
      disabled: true,
    },
  ];
  addOnClick(catalogMenuItems);

  return {
    catalogMenuItems: [
      ...catalogMenuItems,
      {
        type: 'dropdown',
        label: 'DropdownTest',
        menuItems: catalogMenuItems,
      },
    ],
  };
};
