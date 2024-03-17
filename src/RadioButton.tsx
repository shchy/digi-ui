import { ChangeEventHandler, useId, FC } from 'react';
import { styled, css } from 'styled-components';
import { colorType, getColor } from './styles';
import { Fieldset, Text } from '.';
import { RadioIconUnCheck, RadioIconCheck } from './icons';

export const RadioButton: FC<{
  label: string;
  value: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  color?: colorType;
  group?: string;
  describe?: string;
  istile?: 'true';
  width?: string;
}> = (props) => {
  const id = useId();
  return (
    <Root disabled={props.disabled} $width={props.width}>
      <RadioLabel
        htmlFor={id}
        $type="Body/L"
        $color={props.color}
        $istile={props.istile}
        $checked={props.value}
        $disabled={props.disabled}
      >
        <RadioInput
          id={id}
          type="radio"
          name={props.group ?? props.label}
          checked={props.value}
          onChange={props.onChange}
        />
        <RadioIcon
          htmlFor={id}
          $type="Body/L"
          $color={props.color}
          $checked={props.value}
        >
          {props.value ? <RadioIconCheck /> : <RadioIconUnCheck />}
        </RadioIcon>
        <RadioVert>
          {props.label}
          {props.describe && (
            <Text
              htmlFor={id}
              $type="Caption/L"
              $color="neutral-solid-grey-600"
            >
              {props.describe}
            </Text>
          )}
        </RadioVert>
      </RadioLabel>
    </Root>
  );
};

const Root = styled(Fieldset)<{ $width?: string }>`
  width: ${(props) => props.$width};
`;
const RadioLabel = styled(Text)<{
  $istile?: 'true';
  $checked: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0px;
  gap: 16px;
  ${(props) => {
    if (!props.$istile) return;
    let bordercolor = getColor('neutral-solid-grey-900');
    if (props.$checked) bordercolor = getColor('primitive-blue-900');
    if (props.$disabled) {
      bordercolor = getColor('neutral-solid-grey-420');
    }

    return css`
      border-radius: 8px;
      padding: 16px;
      border: 1px solid ${bordercolor};
    `;
  }}/* &:focus-within {
    outline: ${(props) => {
    return `4px solid ${getColor('focus-yellow')}`;
  }};
  } */
`;

const RadioIcon = styled(Text)<{ $checked: boolean }>`
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

const RadioInput = styled.input`
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

const RadioVert = styled.div`
  display: flex;
  flex-direction: column;
`;
