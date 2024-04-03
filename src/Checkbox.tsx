import { useId, forwardRef } from 'react';
import { styled } from 'styled-components';
import { colorType, getColor } from './styles';
import { Fieldset, Text } from '.';
import { CheckboxIconUnCheck, CheckboxIconChecked } from './icons';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'ref' | 'type'> {
  color?: colorType;
  componentWidth?: number | string;
  isSimple?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ color, componentWidth, isSimple, children, ...rest }, ref) => {
    const id = useId();

    return (
      <Root disabled={rest.disabled} $componentWidth={componentWidth}>
        <CheckboxLabel
          htmlFor={id}
          $type="Body/L"
          $color={color}
          $isSimple={isSimple}
        >
          <CheckboxInput ref={ref} id={id} type="checkbox" {...rest} />
          <CheckboxIcon
            htmlFor={id}
            $type="Body/L"
            $color={color}
            $checked={rest.checked ?? false}
          >
            {rest.checked ? <CheckboxIconChecked /> : <CheckboxIconUnCheck />}
          </CheckboxIcon>
          {children}
        </CheckboxLabel>
      </Root>
    );
  }
);

const Root = styled(Fieldset)`
  width: fit-content;
`;
const CheckboxLabel = styled(Text)<{ $isSimple?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ $isSimple: isSimple }) => !isSimple && 'padding: 8px 0px'};
  gap: 16px;
  white-space: nowrap;
  &:focus-within {
    outline: 2px solid ${getColor('focus-yellow')};
    outline-offset: 2px;
    ${({ $isSimple: isSimple }) => !isSimple && 'border-radius: 8px'};
  }
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
    border: 1px solid ${getColor('neutral-solid-grey-420')};
    background-color: ${getColor('neutral-solid-grey-50')};
  }
`;
