import { ChangeEventHandler, useId, FC } from 'react';
import { styled } from 'styled-components';
import { colorType, getColor } from './styles';
import { Fieldset, Text } from '.';
import { CheckboxIconUnCheck, CheckboxIconChecked } from './icons';

export const Checkbox: FC<{
  label: string;
  value: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  color?: colorType;
  width?: string;
}> = (props) => {
  const id = useId();
  return (
    <Root disabled={props.disabled} $width={props.width}>
      <CheckboxLabel htmlFor={id} $type="Body/L" $color={props.color}>
        <CheckboxInput
          id={id}
          type="checkbox"
          checked={props.value}
          onChange={props.onChange}
        />
        <CheckboxIcon
          htmlFor={id}
          $type="Body/L"
          $color={props.color}
          $checked={props.value}
        >
          {props.value ? <CheckboxIconChecked /> : <CheckboxIconUnCheck />}
        </CheckboxIcon>
        {props.label}
      </CheckboxLabel>
    </Root>
  );
};

const Root = styled(Fieldset)<{ $width?: string }>`
  width: ${(props) => props.$width};
`;
const CheckboxLabel = styled(Text)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0px;
  gap: 16px;
  /* &:focus-within {
    outline: ${(props) => {
    return `4px solid ${getColor('focus-yellow')}`;
  }};
  } */
`;
const CheckboxIcon = styled(Text)<{ $checked: boolean }>`
  height: 24px;
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.$checked ? getColor('primitive-blue-900') : undefined};
  &:disabled {
    color: ${getColor('neutral-solid-grey-420')};
  }
`;

const CheckboxInput = styled.input`
  opacity: 0;
  position: absolute;

  &:disabled {
    border: ${(props) => {
      return `1px solid ${getColor('neutral-solid-grey-420')}`;
    }};
    background-color: ${(props) => {
      return getColor('neutral-solid-grey-50');
    }};
  }
`;
