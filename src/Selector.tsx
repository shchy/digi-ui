import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { getColor, useTypography } from './styles';
import { Fieldset, Text } from '.';
import { ArrowDown } from './icons';

type SelectorState = {
  hasError: boolean;
};
type Props<T> = {
  label: string;
  list: Array<T>;
  selectKey: (v: T) => string;
  selectDisplay?: (v: T) => string;
  selectedItem: T;
  onChange: (item: T) => void;
  required?: boolean;
  supportText?: string;
  errorText?: string;
  disabled?: boolean;
  width?: string;
};

export const Selector = <T,>(props: Props<T>) => {
  const [state, setState] = useState<SelectorState>({
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
      <SelectFrame>
        <Select
          value={props.selectedItem && props.selectKey(props.selectedItem)}
          $state={state}
          onChange={(e) => {
            const findOne = props.list.find(
              (x) => props.selectKey(x) === e.target.value
            );
            if (!findOne) return;
            props.onChange(findOne);
          }}
        >
          {props.list.map((x) => (
            <option key={props.selectKey(x)} value={props.selectKey(x)}>
              {props.selectDisplay
                ? props.selectDisplay(x)
                : props.selectKey(x)}
            </option>
          ))}
        </Select>
        <SelectIcon>
          <ArrowDown />
        </SelectIcon>
      </SelectFrame>
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

const SelectFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
`;

const Select = styled.select<{
  $state?: SelectorState;
}>`
  grid-column: 1/2;
  grid-row: 1/2;
  appearance: none;

  ${() => useTypography('Body/L')}
  min-width: calc(327px - 32px - 2px);
  height: 56px;
  padding: 12px 16px;

  border-radius: 8px;
  border: ${(props) => {
    if (props.$state?.hasError)
      return `1px solid ${getColor('semantic-error-1')}`;
    return `1px solid ${getColor('neutral-solid-grey-900')}`;
  }};

  &:focus {
    outline: ${() => {
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

const SelectIcon = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  align-self: center;
  justify-self: end;
  margin-right: 16px;
  pointer-events: none;
`;
