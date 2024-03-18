import { MouseEventHandler, FC } from 'react';
import { styled } from 'styled-components';
import { getColor } from './styles';
import { Text } from '.';

type buttonType = 'Primary' | 'Secondary' | 'Tertiary';
type buttonSize = 'Large' | 'Medium' | 'Small' | 'X-Small';

export const Button: FC<{
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: buttonType;
  size?: buttonSize;
  disabled?: boolean;
}> = (props) => {
  return (
    <Root
      $type={props.type ?? 'Primary'}
      $size={props.size ?? 'Medium'}
      disabled={props.disabled}
      tabIndex={0}
      onClick={props.onClick}
    >
      <Text $type="Button">{props.label}</Text>
    </Root>
  );
};

const Root = styled.button<{
  $type?: buttonType;
  $size?: buttonSize;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: ${(props) => {
    if (props.$size !== 'X-Small') return undefined;
    return '14px';
  }};
  width: ${(props) => {
    switch (props.$size) {
      case 'Large':
        return '136px';
      case 'Small':
        return '80px';
      case 'X-Small':
        return '72px';
      case 'Medium':
      default:
        return '96px';
    }
  }};
  height: ${(props) => {
    switch (props.$size) {
      case 'Large':
        return '56px';
      case 'Small':
        return '36px';
      case 'X-Small':
        return '28px';
      case 'Medium':
      default:
        return '48px';
    }
  }};
  border-radius: ${(props) => {
    switch (props.$size) {
      case 'X-Small':
        return '4px';
      case 'Small':
        return '6px';
      case 'Large':
      case 'Medium':
      default:
        return '8px';
    }
  }};
  border: ${(props) => {
    if (props.$type !== 'Secondary') return 'none';
    return `1px solid ${getColor('primitive-blue-1000')}`;
  }};
  text-decoration: ${(props) => {
    if (props.$type !== 'Tertiary') return;
    return 'underline';
  }};
  color: ${(props) => {
    switch (props.$type) {
      case 'Primary':
        return getColor('neutral-white');
      case 'Secondary':
        return getColor('primitive-blue-900');
      case 'Tertiary':
        return getColor('primitive-blue-900');
    }
  }};
  background-color: ${(props) => {
    switch (props.$type) {
      case 'Primary':
        return getColor('primitive-blue-900');
      case 'Secondary':
        return getColor('neutral-white');
      case 'Tertiary':
        return getColor('neutral-white');
    }
  }};
  &:focus {
    text-decoration: ${(props) => {
      return 'underline';
    }};
    color: ${(props) => {
      switch (props.$type) {
        case 'Primary':
          return getColor('neutral-white');
        case 'Secondary':
          return getColor('primitive-blue-900');
        case 'Tertiary':
          return getColor('primitive-blue-900');
      }
    }};
    background-color: ${(props) => {
      switch (props.$type) {
        case 'Primary':
          return getColor('primitive-blue-900');
        case 'Secondary':
          return getColor('neutral-white');
        case 'Tertiary':
          return getColor('neutral-white');
      }
    }};
    outline: ${() => {
      return `2px solid ${getColor('focus-yellow')}`;
    }};
    outline-offset: 2px;
  }
  &:hover {
    text-decoration: ${(props) => {
      return 'underline';
    }};
    background-color: ${(props) => {
      switch (props.$type) {
        case 'Primary':
          return getColor('primitive-blue-1000');
        case 'Secondary':
          return getColor('primitive-blue-200');
        case 'Tertiary':
          return getColor('primitive-blue-200');
      }
    }};
  }
  &:active {
    text-decoration: ${(props) => {
      return 'underline';
    }};
    border: ${(props) => {
      if (props.$type !== 'Secondary') return 'none';
      return `1px solid ${getColor('primitive-blue-1200')}`;
    }};
    background-color: ${(props) => {
      switch (props.$type) {
        case 'Primary':
          return getColor('primitive-blue-1100');
        case 'Secondary':
          return getColor('primitive-blue-300');
        case 'Tertiary':
          return getColor('primitive-blue-300');
      }
    }};
  }
  &:disabled {
    border: ${(props) => {
      if (props.$type !== 'Secondary') return 'none';
      return `1px solid ${getColor('neutral-solid-grey-420')}`;
    }};
    text-decoration: ${(props) => {
      return 'none';
    }};
    color: ${(props) => {
      switch (props.$type) {
        case 'Primary':
          return getColor('neutral-white');
        case 'Secondary':
          return getColor('neutral-solid-grey-420');
        case 'Tertiary':
          return getColor('neutral-solid-grey-420');
      }
    }};
    background-color: ${(props) => {
      switch (props.$type) {
        case 'Primary':
          return getColor('neutral-solid-grey-420');
        case 'Secondary':
          return getColor('neutral-white');
        case 'Tertiary':
          return getColor('neutral-white');
      }
    }};
  }
`;
