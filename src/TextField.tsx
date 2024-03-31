import { forwardRef, ChangeEventHandler, FocusEventHandler } from 'react';
import { styled } from 'styled-components';
import { getColor, useTypography } from './styles';
import { Fieldset, Text } from '.';
import { hasError, toArray } from './utils';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'ref'> {
  label: string;
  supportText?: string;
  errorText?: string | string[];
  requiredLabel?: boolean;
}
export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, requiredLabel, supportText, errorText, ...rest }, ref) => {
    return (
      <Root disabled={rest.disabled}>
        <LabelFrame>
          <Text $type="Label/L">{label}</Text>
          {requiredLabel && (
            <Text $type="Caption/L" $color={'semantic-error-1'}>
              必須
            </Text>
          )}
        </LabelFrame>
        {supportText && (
          <Text $type="Caption/L" $color={'neutral-solid-grey-600'}>
            {supportText}
          </Text>
        )}
        <TextInput
          ref={ref}
          $state={{
            hasError: hasError(errorText),
          }}
          {...rest}
          type={rest.type ?? 'text'}
        />
        {!rest.disabled &&
          toArray(errorText)?.map((x, i) => (
            <Text key={i} $type="Caption/L" $color="semantic-error-1" $block>
              {x}
            </Text>
          ))}
      </Root>
    );
  }
);

const Root = styled(Fieldset)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: fit-content;
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

  min-height: calc(56px - 24px - 2px);
  /* min-width: calc(100% - 32px - 2px); */
  padding: 12px 16px;
  border-radius: 8px;
  border: ${(props) => {
    if (props.$state?.hasError)
      return `1px solid ${getColor('semantic-error-1')}`;
    return `1px solid ${getColor('neutral-solid-grey-900')}`;
  }};

  &:focus {
    outline: 4px solid ${getColor('focus-yellow')};
  }
  &:disabled {
    border: 1px solid ${getColor('neutral-solid-grey-420')};
    background-color: ${getColor('neutral-solid-grey-50')};
  }
`;
