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
      tabIndex={!props.onClick ? -1 : undefined}
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

const Root = styled.button<{
  $clickable: boolean;
  $disabled?: boolean;
  $selected?: boolean;
}>`
  background-color: transparent;
  border: none;
  color: ${getColor('neutral-solid-grey-900')};

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spaces.XXS};
  height: 50px;
  padding: 0 ${spaces.S};
  cursor: ${(props) =>
    props.$disabled || !props.$clickable ? 'default' : 'pointer'};

  ${(props) =>
    props.$selected &&
    css`
      color: ${getColor('primitive-blue-900')};
      height: calc(50px);
      padding-top: 2px;
      border-bottom: 2px solid ${getColor('primitive-blue-900')};
    `}

  ${(props) => {
    if (props.$disabled || !props.$clickable) {
      return css`
        pointer-events: none;
      `;
    }
    return css`
      &:focus {
        outline: ${`2px solid ${getColor('focus-yellow')}`};
        outline-offset: 2px;
        border-radius: 2px;
      }
      &:hover {
        background-color: ${getColor('neutral-opacity-grey-50')};
        outline: none;
        ${!props.$selected &&
        css`
          height: calc(50px);
          padding-top: 1px;
          border-bottom: 1px solid ${getColor('neutral-solid-grey-900')};
        `}
      }
      &:active {
        background-color: ${getColor('neutral-solid-grey-50')};
        color: ${getColor('primitive-blue-900')};
        height: calc(50px);
        padding-top: 2px;
        border-bottom: 2px solid ${getColor('primitive-blue-900')};
      }
    `;
  }}
`;

const InnerText = styled(Text)`
  pointer-events: none;
  white-space: nowrap;
`;
