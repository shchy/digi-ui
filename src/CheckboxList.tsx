import { useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { Fieldset, Text, Checkbox } from '.';

type CheckboxListState = {
  hasError: boolean;
};
type Props<T> = {
  label: string;
  list: Array<T>;
  selectKey: (v: T) => string;
  selectDisplay?: (v: T) => string;
  selectedItems: Array<T>;
  onChange: (items: Array<T>) => void;
  required?: boolean;
  supportText?: string;
  errorText?: string | string[];
  disabled?: boolean;
  width?: string;
};

export const CheckboxList = <T,>(props: Props<T>) => {
  const [state, setState] = useState<CheckboxListState>({
    hasError: false,
  });
  const errors = useMemo(() => {
    if (!props.errorText) return;
    if (Array.isArray(props.errorText)) {
      if (props.errorText.length == 0) return;
      return props.errorText;
    }
    return [props.errorText];
  }, [props.errorText]);
  const [selectableItems, setSelectableItems] = useState<
    {
      isSelected: boolean;
      item: T;
    }[]
  >([]);

  useEffect(() => {
    setState({
      hasError: !!errors,
    });
    setSelectableItems(
      props.list.map((x) => {
        const item = {
          item: x,
          isSelected: props.selectedItems.includes(x),
        };
        return item;
      })
    );
  }, [errors, props.list, props.selectedItems]);

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

      {selectableItems.map((x) => (
        <Checkbox
          color={state.hasError ? 'semantic-error-1' : undefined}
          key={props.selectKey(x.item)}
          label={
            props.selectDisplay
              ? props.selectDisplay(x.item)
              : props.selectKey(x.item)
          }
          value={x.isSelected}
          onChange={(e) => {
            x.isSelected = e.target.checked;
            props.onChange(
              selectableItems.filter((x) => x.isSelected).map((x) => x.item)
            );
          }}
        />
      ))}

      {errors &&
        !props.disabled &&
        errors.map((x) => (
          <Text $type="Caption/L" $color="semantic-error-1" $block>
            {x}
          </Text>
        ))}
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
