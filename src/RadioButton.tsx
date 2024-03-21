import {
  useId,
  FC,
  forwardRef,
  ChangeEventHandler,
  FocusEventHandler,
  useState,
  useEffect,
  useRef,
} from 'react';
import { styled, css } from 'styled-components';
import { colorType, getColor } from './styles';
import { Fieldset, Text } from '.';
import { RadioIconUnCheck, RadioIconCheck } from './icons';

export const RadioButton = forwardRef<
  HTMLInputElement,
  {
    label: string;
    value: string;
    checked?: boolean;
    describe?: string;
    istile?: 'true';
    width?: string;
    color?: colorType;

    required?: boolean;
    disabled?: boolean;
    name?: string;
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;

    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
  }
>((props, ref) => {
  const id = useId();
  // const [checked, setChecked] = useState(props.checked ?? false);
  // const innerRef = useRef<HTMLInputElement>(null);
  // const wait = (ms: number) =>
  //   new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
  // useEffect(() => {
  //   ref = innerRef;
  //   console.log('useEffect', innerRef.current);
  //   wait(1000).then(() => {
  //     console.log('after', props.checked, innerRef.current);
  //     if (props.checked === undefined && innerRef.current) {
  //       if (innerRef.current.checked != checked) {
  //         setChecked(innerRef.current?.checked ?? false);
  //         console.log('fire', checked);
  //         props.onChange &&
  //           props.onChange({
  //             target: innerRef.current,
  //           } as React.ChangeEvent<HTMLInputElement>);
  //       }
  //     }
  //   });

  //   // const nativeChecked = Object.getOwnPropertyDescriptor(
  //   //   HTMLInputElement.prototype,
  //   //   'checked'
  //   // );
  //   // if (nativeChecked) {
  //   //   console.log('nativeChecked', nativeChecked);
  //   //   const original = nativeChecked.set;

  //   //   nativeChecked.set = function (v: any): void {
  //   //     console.log('set checked', v);
  //   //     original?.call(innerRef.current, v);
  //   //     setChecked(v);
  //   //     // props.onChange &&
  //   //     //   props.onChange({
  //   //     //     target: innerRef.current,
  //   //     //   } as React.ChangeEvent<HTMLInputElement>);
  //   //   };
  //   //   console.log('nativeChecked.set', nativeChecked.set);
  //   //   Object.defineProperty(innerRef.current, 'checked', nativeChecked);
  //   //   console.log('override', innerRef.current);
  //   // }

  //   // innerRef.current?.checked;
  //   // console.log('useEffect', props.checked, innerRef.current);
  //   // if (props.checked === undefined && innerRef.current) {
  //   //   console.log('innerRef.current?.checked', innerRef.current.checked);
  //   //   console.log('checked', checked);
  //   //   if (innerRef.current.checked != checked) {
  //   //     setChecked(innerRef.current?.checked ?? false);
  //   //     console.log('fire', checked);
  //   //     props.onChange &&
  //   //       props.onChange({
  //   //         target: innerRef.current,
  //   //       } as React.ChangeEvent<HTMLInputElement>);
  //   //   }
  //   // }
  // }, [innerRef]);

  return (
    <Root disabled={props.disabled} $width={props.width}>
      <RadioLabel
        htmlFor={id}
        $type="Body/L"
        $color={props.color}
        $istile={props.istile}
        $checked={props.checked ?? false}
        $disabled={props.disabled}
      >
        <RadioInput
          ref={ref}
          id={id}
          type="radio"
          name={props.name ?? props.label}
          value={props.value}
          checked={props.checked}
          required={props.required}
          disabled={props.disabled}
          min={props.min}
          max={props.max}
          minLength={props.minLength}
          maxLength={props.maxLength}
          pattern={props.pattern}
          onChange={(e) => {
            // setChecked(e.target.checked);
            props.onChange && props.onChange(e);
          }}
          onBlur={props.onBlur}
        />
        <RadioIcon
          htmlFor={id}
          $type="Body/L"
          $color={props.color}
          $checked={props.checked ?? false}
        >
          {props.checked ? <RadioIconCheck /> : <RadioIconUnCheck />}
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
});

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
