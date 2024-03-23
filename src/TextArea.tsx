import { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react';
import { styled } from 'styled-components';
import { getColor, useTypography } from './styles';
import { Fieldset, Text } from '.';
import { hasError, toArray } from './utils';

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  {
    label: string;
    value?: string;
    supportText?: string;
    errorText?: string | string[];
    width?: string;
    requiredLabel?: boolean;

    required?: boolean;
    disabled?: boolean;
    name?: string;
    maxLength?: number;
    minLength?: number;

    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;
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
      <TextAreaInner
        ref={ref}
        name={props.name}
        required={props.required}
        disabled={props.disabled}
        value={props.value}
        minLength={props.minLength}
        maxLength={props.maxLength}
        onChange={props.onChange}
        onBlur={props.onBlur}
        $state={{
          hasError: hasError(props.errorText),
        }}
      />

      <LeftRight>
        <StartCell>
          {!props.disabled &&
            toArray(props.errorText)?.map((x, i) => (
              <Text key={i} $type="Caption/L" $color="semantic-error-1" $block>
                {x}
              </Text>
            ))}
        </StartCell>
        <EndCell>
          {props.maxLength && (
            <Text
              $type="Caption/M"
              $color={
                props.errorText !== undefined && props.errorText.length > 0
                  ? 'semantic-error-1'
                  : 'neutral-solid-grey-420'
              }
            >
              {props.value?.length ?? 0}/{props.maxLength}
            </Text>
          )}
        </EndCell>
      </LeftRight>
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

const LeftRight = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr auto;
`;
const StartCell = styled.div`
  grid-column: 1/2;
`;
const EndCell = styled.div`
  grid-column: 2/3;
  align-self: flex-end;
`;

const TextAreaInner = styled.textarea<{
  $state?: {
    hasError: boolean;
  };
}>`
  ${() => useTypography('Body/L')}

  height: calc(120px - 24px - 2px);
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
