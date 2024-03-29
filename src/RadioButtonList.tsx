import { forwardRef, ChangeEventHandler, FocusEventHandler } from 'react';
import { styled } from 'styled-components';
import { Fieldset, Text, RadioButton } from '.';
import { hasError, toArray } from './utils';

type Props<T> = {
  label: string;
  selectedItem?: T;
  supportText?: string;
  errorText?: string | string[];
  width?: string;
  istile?: 'true';
  requiredLabel?: boolean;

  list: Array<T>;
  selectKey: (v: T) => string;
  selectDisplay?: (v: T) => string;
  selectDescribe?: (v: T) => string;

  required?: boolean;
  disabled?: boolean;
  name?: string;

  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

export const RadioButtonList = forwardRef<HTMLInputElement, Props<any>>(
  (props: Props<any>, ref) => {
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

        {props.list.map((x) => (
          <RadioButton
            key={props.selectKey(x)}
            ref={ref}
            color={hasError(props.errorText) ? 'semantic-error-1' : undefined}
            istile={props.istile}
            name={props.name}
            value={props.selectKey(x)}
            required={props.required}
            disabled={props.disabled}
            checked={
              props.selectedItem &&
              props.selectKey(props.selectedItem) === props.selectKey(x)
            }
            describe={props.selectDescribe && props.selectDescribe(x)}
            onChange={props.onChange}
            onBlur={props.onBlur}
          >
            {props.selectDisplay ? props.selectDisplay(x) : props.selectKey(x)}
          </RadioButton>
        ))}

        {!props.disabled &&
          toArray(props.errorText)?.map((x, i) => (
            <Text key={i} $type="Caption/L" $color="semantic-error-1" $block>
              {x}
            </Text>
          ))}
      </Root>
    );
  }
) as <T>(p: Props<T> & { ref?: React.Ref<HTMLInputElement> }) => JSX.Element;

const Root = styled(Fieldset)<{ $width?: string }>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
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
