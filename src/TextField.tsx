import { forwardRef, ChangeEventHandler, FocusEventHandler } from 'react';
import { styled } from 'styled-components';
import { getColor, useTypography } from './styles';
import { Fieldset, Text } from '.';
import { hasError, toArray } from './utils';

export const TextField = forwardRef<
  HTMLInputElement,
  {
    label: string;
    value?: string;
    supportText?: string;
    errorText?: string | string[];
    width?: string;
    inputType?: React.HTMLInputTypeAttribute;
    requiredLabel?: boolean;

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
  return (
    <Root disabled={props.disabled} $width={props.width}>
      <LabelFrame>
        <Text $type="Label/L">{props.label}</Text>
        {props.requiredLabel && (
          <Text $type="Caption/L" $color={'semantic-error-1'}>
            必須
          </Text>
        )}
      </LabelFrame>
      {props.supportText && (
        <Text $type="Caption/L" $color={'neutral-solid-grey-600'}>
          {props.supportText}
        </Text>
      )}
      <TextInput
        type={props.inputType ?? 'text'}
        ref={ref}
        name={props.name}
        required={props.required}
        disabled={props.disabled}
        value={props.value}
        min={props.min}
        max={props.max}
        minLength={props.minLength}
        maxLength={props.maxLength}
        pattern={props.pattern}
        onChange={props.onChange}
        onBlur={props.onBlur}
        $state={{
          hasError: hasError(props.errorText),
        }}
      />
      {!props.disabled &&
        toArray(props.errorText)?.map((x, i) => (
          <Text key={i} $type="Caption/L" $color="semantic-error-1" $block>
            {x}
          </Text>
        ))}
    </Root>
  );
});

const Root = styled(Fieldset)<{ $width?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: ${(props) => props.$width};
`;

const LabelFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
`;

const TextInput = styled.input<{
  $state?: {
    hasError: boolean;
  };
}>`
  ${() => useTypography('Body/L')}

  height: calc(56px - 24px - 2px);
  width: calc(100% - 32px - 2px);
  padding: 12px 16px;
  border-radius: 8px;
  border: ${(props) => {
    if (props.$state?.hasError)
      return `1px solid ${getColor('semantic-error-1')}`;
    return `1px solid ${getColor('neutral-solid-grey-900')}`;
  }};

  &:focus {
    outline: ${(props) => {
      return `4px solid ${getColor('focus-yellow')}`;
    }};
  }
  &:disabled {
    border: ${(props) => {
      return `1px solid ${getColor('neutral-solid-grey-420')}`;
    }};
    background-color: ${(props) => {
      return getColor('neutral-solid-grey-50');
    }};
  }
`;
