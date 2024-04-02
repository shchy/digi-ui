import { FC, useRef, useState } from 'react';
import { css, styled } from 'styled-components';
import {
  getColor,
  MenuList,
  textType,
  MenuItem,
  Text,
  spaces,
  useTypography,
} from '.';
import { Icon, IconProps, Icons } from './icons';
import React from 'react';

export interface Props {
  label: string;
  textType?: textType;
  disabled?: boolean;
  icon?: IconProps;
  direction?: 'top' | 'left' | 'bottom' | 'right';
  align?: 'start' | 'end';
  menuItems?: MenuItem[];
}

export const Dropdown: FC<React.PropsWithChildren<Props>> = (props) => {
  const selectDirectionIcon = (): Icons => {
    switch (props.direction) {
      case 'top':
        return 'ArrowUp';
      case 'left':
        return 'ArrowLeft';
      case 'right':
        return 'ArrowRight';
      case 'bottom':
      default:
        return 'ArrowDown';
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const blurHandler = (e: React.FocusEvent<HTMLDivElement>) => {
    const target = e.relatedTarget;
    if (target && frame.current?.contains(target)) {
      return;
    }
    setIsOpen(false);
  };
  const resolveContents = () => {
    if (props.children) {
      return props.children;
    } else if (props.menuItems) {
      return <MenuList direction="column" items={props.menuItems} />;
    } else {
      return <></>;
    }
  };

  const contents = resolveContents();
  const beforeIcon =
    props.direction === 'left' ? { name: selectDirectionIcon() } : props.icon;
  const afterIcon =
    props.direction !== 'left' ? { name: selectDirectionIcon() } : props.icon;

  return (
    <Frame ref={frame} onBlur={blurHandler}>
      <Root disabled={props.disabled} onClick={() => setIsOpen(!isOpen)}>
        {beforeIcon && <Icon $textType={props.textType} {...beforeIcon} />}
        <InnerText
          $type={props.textType}
          $color={props.disabled ? 'neutral-solid-grey-420' : undefined}
          $block
        >
          {props.label}
        </InnerText>
        {afterIcon && <Icon $textType={props.textType} {...afterIcon} />}
      </Root>

      {isOpen && (
        <DropList
          $isOpen={isOpen}
          $direction={props.direction}
          $align={props.align}
        >
          {contents}
        </DropList>
      )}
    </Frame>
  );
};

const Frame = styled.div`
  position: relative;
  width: fit-content;
`;
const Root = styled.button`
  background-color: transparent;
  border: none;
  color: ${getColor('neutral-solid-grey-900')};
  ${useTypography('Body/L')}

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spaces.XXS};

  padding: 0 ${spaces.S};
  cursor: pointer;

  &:focus {
    outline: ${`2px solid ${getColor('focus-yellow')}`};
    border-radius: 4px;
  }
  &:hover {
    background-color: ${getColor('neutral-solid-grey-50')};
  }
  &:disabled {
    cursor: default;
    pointer-events: none;
  }
`;

const InnerText = styled(Text)`
  pointer-events: none;
  white-space: nowrap;
`;

const DropList = styled.div<{
  $isOpen: boolean;
  $direction?: 'top' | 'left' | 'bottom' | 'right';
  $align?: 'start' | 'end';
}>`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  position: absolute;
  border: 1px solid ${getColor('neutral-solid-grey-420')};
  min-width: 100%;
  width: max-content;
  background-color: ${getColor('neutral-white')};
  ${(props) => {
    const pos: {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
    } = {};
    const direction = props.$direction ?? 'bottom';
    const align = props.$align ?? 'start';

    switch (direction) {
      case 'left':
        pos.right = '100%';
        if (align === 'start') {
          pos.top = '0px';
        } else {
          pos.bottom = '0px';
        }
        break;
      case 'right':
        pos.left = '100%';
        if (align === 'start') {
          pos.top = '0px';
        } else {
          pos.bottom = '0px';
        }
        break;
      case 'top':
        pos.bottom = '100%';
        if (align === 'start') {
          pos.left = '0px';
        } else {
          pos.right = '0px';
        }
        break;
      case 'bottom':
      default:
        pos.top = '100%';
        if (align === 'start') {
          pos.left = '0px';
        } else {
          pos.right = '0px';
        }
    }

    return css`
      left: ${pos.left};
      right: ${pos.right};
      top: ${pos.top};
      bottom: ${pos.bottom};
    `;
  }}
`;
