import { forwardRef, useMemo } from 'react';
import { styled } from 'styled-components';
import { getColor, useTypography } from './styles';
import { Fieldset, Text } from '.';
import { hasError, toArray } from './utils';

interface Props
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'ref'> {
  label: string;
  supportText?: string;
  errorText?: string | string[];
  requiredLabel?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, requiredLabel, supportText, errorText, ...rest }, ref) => {
    const textLength = useMemo(() => {
      if (rest.value === undefined) return 0;
      if (Array.isArray(rest.value)) {
        return rest.value.reduce((sum, v: string) => sum + v.length, 0);
      } else if (typeof rest.value === 'number') {
        return rest.value.toString().length;
      } else {
        return rest.value.length;
      }
    }, [rest.value]);
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
        <TextAreaInner
          ref={ref}
          $state={{
            hasError: hasError(errorText),
          }}
          {...rest}
        />

        <LeftRight>
          <StartCell>
            {!rest.disabled &&
              toArray(errorText)?.map((x, i) => (
                <Text
                  key={i}
                  $type="Caption/L"
                  $color="semantic-error-1"
                  $block
                >
                  {x}
                </Text>
              ))}
          </StartCell>
          <EndCell>
            {rest.maxLength && (
              <Text
                $type="Caption/M"
                $color={
                  errorText !== undefined && errorText.length > 0
                    ? 'semantic-error-1'
                    : 'neutral-solid-grey-420'
                }
              >
                {textLength}/{rest.maxLength}
              </Text>
            )}
          </EndCell>
        </LeftRight>
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

  min-height: calc(120px - 24px - 2px);
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
