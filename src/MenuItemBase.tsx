import { FC } from 'react';
import { css, styled } from 'styled-components';
import {
  Text,
  spaces,
  getColor,
  MenuItemSectionHeader,
  MenuItemSimple,
  MenuItemDropdown,
} from '.';
import { Icon } from './icons';

export type MenuProps = Omit<MenuItemSectionHeader, 'type'> &
  Omit<MenuItemSimple, 'type'> &
  Omit<MenuItemDropdown, 'type'>;

export const MenuItemBase: FC<MenuProps> = (props) => {
  const textType = props.textType ?? 'Body/L';
  return (
    <Root
      onClick={props.onClick}
      $clickable={!!props.onClick}
      $selected={!!props.onClick && props.selected}
      $disabled={!!props.onClick && props.disabled}
    >
      {props.beforeIcon && <Icon $textType={textType} {...props.beforeIcon} />}
      <InnerText
        $type={textType}
        $color={props.disabled ? 'neutral-solid-grey-420' : undefined}
        $block
      >
        {props.label}
      </InnerText>
      {props.afterIcon && <Icon $textType={textType} {...props.afterIcon} />}
    </Root>
  );
};

const Root = styled.div<{
  $clickable: boolean;
  $disabled?: boolean;
  $selected?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spaces.XXS};
  height: 50px;
  /* width: fit-content; */
  padding: 0 ${spaces.S};
  cursor: ${(props) =>
    props.$disabled || !props.$clickable ? 'default' : 'pointer'};

  ${(props) =>
    props.$selected &&
    css`
      color: ${getColor('primitive-blue-900')};
      height: calc(50px - 4px);
      padding-top: 2px;
      border-bottom: 2px solid ${getColor('primitive-blue-900')};
    `}

  ${(props) => {
    if (props.$disabled || !props.$clickable) return;
    return css`
      &:hover {
        background-color: ${getColor('neutral-solid-grey-50')};
        ${!props.$selected &&
        css`
          height: calc(50px - 2px);
          padding-top: 1px;
          border-bottom: 1px solid ${getColor('neutral-solid-grey-900')};
        `}
      }
      &:active {
        background-color: ${getColor('neutral-solid-grey-50')};
        color: ${getColor('primitive-blue-900')};
        height: calc(50px - 4px);
        padding-top: 2px;
        border-bottom: 2px solid ${getColor('primitive-blue-900')};
      }
    `;
  }}
`;

const InnerText = styled(Text)`
  pointer-events: none;
`;
