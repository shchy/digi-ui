import { FC, useRef, useState } from 'react';
import { css, styled } from 'styled-components';
import { MenuItemDropdown, MenuItemBase, getColor, MenuList } from '.';
import { Icons } from './icons';

type Props = Omit<MenuItemDropdown, 'type'>;

export const MenuItemDropdownComponent: FC<Props> = (props) => {
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

  return (
    <Root ref={frame} tabIndex={0} onBlur={blurHandler}>
      <MenuItemBase
        {...props}
        afterIcon={{ name: selectDirectionIcon() }}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <DropList
          $isOpen={isOpen}
          $direction={props.direction}
          $align={props.align}
        >
          {contents}
        </DropList>
      )}
    </Root>
  );
};

const Root = styled.div`
  position: relative;
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
