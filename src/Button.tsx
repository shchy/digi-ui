import { FC } from 'react';
import { css, styled } from 'styled-components';
import { getColor, spaces, textType } from './styles';
import { Text } from '.';
import { Icon, IconProps } from './icons';

type buttonType = 'Primary' | 'Secondary' | 'Tertiary';
type buttonSize = 'Large' | 'Medium' | 'Small' | 'X-Small';

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> {
  buttonType?: buttonType;
  buttonSize?: buttonSize;
  beforeIcon?: IconProps;
  afterIcon?: IconProps;
}

export const Button: FC<Props> = ({
  buttonType,
  buttonSize,
  beforeIcon,
  afterIcon,
  children,
  ...rest
}) => {
  const labelType: textType = buttonSize === 'X-Small' ? 'Body/M' : 'Button';

  return (
    <Root
      $v={{
        buttonType: buttonType ?? 'Primary',
        buttonSize: buttonSize ?? 'Medium',
      }}
      {...rest}
    >
      {beforeIcon && <Icon {...beforeIcon} />}
      <ButtonLabel $type={labelType}>{children}</ButtonLabel>
      {afterIcon && <Icon {...afterIcon} />}
    </Root>
  );
};

const Root = styled.button<{
  $v: { buttonType: buttonType; buttonSize: buttonSize };
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${spaces.XXS};

  ${({ $v: { buttonType } }) => {
    switch (buttonType) {
      case 'Primary':
        return css`
          border: none;
          color: ${getColor('neutral-white')};
          background-color: ${getColor('primitive-blue-900')};

          &:focus {
            text-decoration: underline;
            outline: 2px solid ${getColor('focus-yellow')};
            outline-offset: 2px;
          }
          &:hover {
            text-decoration: underline;
            background-color: ${getColor('primitive-blue-1000')};
            outline: none;
          }
          &:active {
            text-decoration: underline;
            background-color: ${getColor('primitive-blue-1100')};
            outline: none;
          }
          &:disabled {
            text-decoration: none;
            color: ${getColor('neutral-white')};
            background-color: ${getColor('neutral-solid-grey-420')};
          }
        `;
      case 'Secondary':
        return css`
          border: 1px solid ${getColor('primitive-blue-1000')};
          color: ${getColor('primitive-blue-900')};
          background-color: ${getColor('neutral-white')};

          &:focus {
            text-decoration: underline;
            outline: 2px solid ${getColor('focus-yellow')};
            outline-offset: 2px;
          }
          &:hover {
            text-decoration: underline;
            background-color: ${getColor('primitive-blue-200')};
            outline: none;
          }
          &:active {
            text-decoration: underline;
            background-color: ${getColor('primitive-blue-300')};
            border: 1px solid ${getColor('primitive-blue-1200')};
            outline: none;
          }
          &:disabled {
            border: 1px solid ${getColor('neutral-solid-grey-420')};
            text-decoration: none;
            color: ${getColor('neutral-solid-grey-420')};
            background-color: ${getColor('neutral-white')};
          }
        `;
      case 'Tertiary':
        return css`
          text-decoration: underline;
          border: none;
          color: ${getColor('primitive-blue-900')};
          background-color: ${getColor('neutral-white')};

          &:focus {
            text-decoration: underline;
            outline: 2px solid ${getColor('focus-yellow')};
            outline-offset: 2px;
          }
          &:hover {
            text-decoration: underline;
            background-color: ${getColor('primitive-blue-200')};
            outline: none;
          }
          &:active {
            text-decoration: underline;
            background-color: ${getColor('primitive-blue-300')};
            outline: none;
          }
          &:disabled {
            text-decoration: none;
            color: ${getColor('neutral-solid-grey-420')};
            background-color: ${getColor('neutral-white')};
          }
        `;
    }
  }}
  ${({ $v: { buttonSize } }) => {
    switch (buttonSize) {
      case 'Large':
        return css`
          min-width: 136px;
          height: 56px;
          margin: 0;
          border-radius: 8px;
        `;
      case 'Medium':
        return css`
          min-width: 96px;
          height: 48px;
          margin: 0;
          border-radius: 8px;
        `;
      case 'Small':
        return css`
          min-width: 80px;
          height: 36px;
          margin: ${spaces.XXS} 0;
          border-radius: 6px;
        `;
      case 'X-Small':
        return css`
          font-size: 14px;
          min-width: 72px;
          height: 28px;
          margin: ${spaces.XS} 0;
          border-radius: 4px;
        `;
    }
  }}
`;

const ButtonLabel = styled(Text)`
  pointer-events: none;
  white-space: nowrap;
`;
