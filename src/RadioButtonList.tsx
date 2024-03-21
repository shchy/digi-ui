import {
  useEffect,
  useMemo,
  useState,
  forwardRef,
  ChangeEventHandler,
  FocusEventHandler,
} from 'react';
import { styled } from 'styled-components';
import { Fieldset, Text, RadioButton } from '.';

type RadioButtonListState = {
  hasError: boolean;
};
type Props<T> = {
  label: string;
  selectedItem?: T;
  supportText?: string;
  errorText?: string | string[];
  width?: string;
  istile?: 'true';

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
    const [state, setState] = useState<RadioButtonListState>({
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

    useEffect(() => {
      setState({
        hasError: !!errors,
      });
    }, [errors]);

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
            ref={ref}
            color={state.hasError ? 'semantic-error-1' : undefined}
            istile={props.istile}
            name={props.name}
            value={props.selectKey(x)}
            required={props.required}
            disabled={props.disabled}
            checked={
              props.selectedItem &&
              props.selectKey(props.selectedItem) === props.selectKey(x)
            }
            label={
              props.selectDisplay ? props.selectDisplay(x) : props.selectKey(x)
            }
            describe={props.selectDescribe && props.selectDescribe(x)}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        ))}

        {errors &&
          !props.disabled &&
          errors.map((x, i) => (
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
