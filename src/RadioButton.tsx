import { useId, forwardRef } from 'react';
import { styled, css } from 'styled-components';
import { colorType, getColor } from './styles';
import { Fieldset, Text } from '.';
import { RadioIconUnCheck, RadioIconCheck } from './icons';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'ref' | 'type'> {
  describe?: string;
  istile?: 'true';
  color?: colorType;
  componentWidth?: number | string;
}

export const RadioButton = forwardRef<HTMLInputElement, Props>(
  ({ describe, color, istile, children, componentWidth, ...rest }, ref) => {
    const id = useId();

    return (
      <Root disabled={rest.disabled} $componentWidth={componentWidth}>
        <RadioLabel
          htmlFor={id}
          $type="Body/L"
          $color={color}
          $istile={istile}
          $checked={rest.checked ?? false}
          $disabled={rest.disabled}
        >
          <RadioInput ref={ref} id={id} type="radio" {...rest} />
          <RadioIcon
            htmlFor={id}
            $type="Body/L"
            $color={color}
            $checked={rest.checked ?? false}
          >
            {rest.checked ? <RadioIconCheck /> : <RadioIconUnCheck />}
          </RadioIcon>
          <RadioVert>
            {children}
            {describe && (
              <Text
                htmlFor={id}
                $type="Caption/L"
                $color="neutral-solid-grey-600"
              >
                {describe}
              </Text>
            )}
          </RadioVert>
        </RadioLabel>
      </Root>
    );
  }
);

const Root = styled(Fieldset)``;
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
  white-space: nowrap;
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
  }}
  &:focus-within {
    outline: 2px solid ${getColor('focus-yellow')};
    outline-offset: ${({ $istile }) => (!$istile ? '2px' : '0')};
    border-radius: 8px;
  }
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
