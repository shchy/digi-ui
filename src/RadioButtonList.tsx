import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Fieldset, Text, RadioButton } from '.';

type RadioButtonListState = {
  hasError: boolean;
};
type Props<T> = {
  label: string;
  list: Array<T>;
  selectKey: (v: T) => string;
  selectDisplay?: (v: T) => string;
  selectDescribe?: (v: T) => string;
  selectedItem?: T;
  onChange: (item: T) => void;
  required?: boolean;
  supportText?: string;
  errorText?: string;
  disabled?: boolean;
  istile?: 'true';
  group?: string;
  width?: string;
};

export const RadioButtonList = <T,>(props: Props<T>) => {
  const [state, setState] = useState<RadioButtonListState>({
    hasError: false,
  });

  useEffect(() => {
    setState({
      hasError: !!props.errorText,
    });
  }, [props.errorText]);

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

      {props.list.map((x) => (
        <RadioButton
          key={props.selectKey(x)}
          label={
            props.selectDisplay ? props.selectDisplay(x) : props.selectKey(x)
          }
          describe={props.selectDescribe && props.selectDescribe(x)}
          value={
            (props.selectedItem &&
              props.selectKey(props.selectedItem) === props.selectKey(x)) ??
            false
          }
          onChange={(e) => {
            if (!e.target.checked) return;
            props.onChange(x);
          }}
          disabled={props.disabled}
          color={state.hasError ? 'semantic-error-1' : undefined}
          group={props.group}
          istile={props.istile}
        />
      ))}

      {props.errorText && !props.disabled && (
        <Text $type="Caption/L" $color="semantic-error-1">
          {props.errorText}
        </Text>
      )}
    </Root>
  );
};

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
