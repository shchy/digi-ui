import { ChangeEventHandler, useEffect, useState, FC, useMemo } from 'react';
import { styled } from 'styled-components';
import { getColor, useTypography } from './styles';
import { Fieldset, Text } from '.';

type TextAreaState = {
  hasError: boolean;
};

export const TextArea: FC<{
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
  supportText?: string;
  errorText?: string | string[];
  disabled?: boolean;
  maxLength?: number;
  width?: string;
}> = (props) => {
  const [state, setState] = useState<TextAreaState>({
    hasError: false,
  });
  const [count, setCount] = useState(0);
  const errors = useMemo(() => {
    if (!props.errorText) return;
    if (Array.isArray(props.errorText)) {
      if (props.errorText.length == 0) return;
      return props.errorText;
    }
    return [props.errorText];
  }, [props.errorText]);

  useEffect(() => {
    setState({
      hasError: !!errors,
    });
    setCount(props.value.length);
  }, [errors, props.value]);

  return (
    <Root disabled={props.disabled} $width={props.width}>
      <LabelFrame>
        <Text $type="Label/L">{props.label}</Text>
        {props.required && (
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
        value={props.value}
        $state={state}
        maxLength={props.maxLength}
        onChange={props.onChange}
      />

      <LeftRight>
        <StartCell>
          {errors &&
            errors.map((x) => (
              <Text $type="Caption/L" $color="semantic-error-1">
                {x}
              </Text>
            ))}
        </StartCell>
        <EndCell>
          {props.maxLength && (
            <Text
              $type="Caption/M"
              $color={errors ? 'semantic-error-1' : 'neutral-solid-grey-420'}
            >
              {count}/{props.maxLength}
            </Text>
          )}
        </EndCell>
      </LeftRight>
    </Root>
  );
};

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
  $state?: TextAreaState;
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
