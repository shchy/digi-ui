import { forwardRef } from 'react';
import { css, styled } from 'styled-components';
import { getColor, useTypography } from './styles';
import { Fieldset, Text } from '.';
import { SelectorArrowDown } from './icons';
import { hasError, toArray } from './utils';

interface Props<T>
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'ref' | 'value'> {
  label: string;
  selectedItem?: T;
  supportText?: string;
  errorText?: string | string[];
  list: Array<T>;
  selectKey: (v: T) => string;
  selectDisplay?: (v: T) => string;
  requiredLabel?: boolean;
  componentWidth?: number | string;
  isSimple?: boolean;
}

export const Selector = forwardRef<HTMLSelectElement, Props<any>>(
  (
    {
      label,
      list,
      selectKey,
      selectDisplay,
      selectedItem,
      supportText,
      errorText,
      requiredLabel,
      componentWidth,
      isSimple,
      ...rest
    }: Props<any>,
    ref
  ) => {
    return !isSimple ? (
      <Root disabled={rest.disabled} $componentWidth={componentWidth}>
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
        <SelectFrame>
          <Select
            ref={ref}
            value={selectedItem && selectKey(selectedItem)}
            $state={{
              hasError: hasError(errorText),
            }}
            {...rest}
          >
            {list.map((x) => (
              <option key={selectKey(x)} value={selectKey(x)}>
                {selectDisplay ? selectDisplay(x) : selectKey(x)}
              </option>
            ))}
          </Select>
          <SelectIcon>
            <SelectorArrowDown />
          </SelectIcon>
        </SelectFrame>
        {!rest.disabled &&
          toArray(errorText)?.map((x, i) => (
            <Text key={i} $type="Caption/L" $color="semantic-error-1" $block>
              {x}
            </Text>
          ))}
      </Root>
    ) : (
      <Root
        disabled={rest.disabled}
        $componentWidth={componentWidth}
        direction="row"
      >
        <Text $type="Label/L" $noWrap>
          {label}
        </Text>
        <SelectFrame>
          <Select
            ref={ref}
            value={selectedItem && selectKey(selectedItem)}
            $state={{
              hasError: hasError(errorText),
            }}
            $isSimple={isSimple}
            {...rest}
          >
            {list.map((x) => (
              <option key={selectKey(x)} value={selectKey(x)}>
                {selectDisplay ? selectDisplay(x) : selectKey(x)}
              </option>
            ))}
          </Select>
          <SelectIcon>
            <SelectorArrowDown />
          </SelectIcon>
        </SelectFrame>
      </Root>
    );
  }
) as <T>(p: Props<T> & { ref?: React.Ref<HTMLSelectElement> }) => JSX.Element;

const Root = styled(Fieldset)<{ direction?: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  align-items: ${({ direction }) => (direction === 'row' ? 'center' : 'start')};
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

const SelectFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
`;

const Select = styled.select<{
  $state?: {
    hasError: boolean;
  };
  $isSimple?: boolean;
}>`
  grid-column: 1/2;
  grid-row: 1/2;
  appearance: none;

  ${() => useTypography('Body/L')}
  ${({ $isSimple }) => {
    if ($isSimple) {
      return css`
        min-width: calc(180px - 24px - 2px);
        padding: 4px 12px;
      `;
    }
    return css`
      min-width: calc(327px - 32px - 2px);
      min-height: 56px;
      padding: 12px 16px;
    `;
  }}
  

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

const SelectIcon = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  align-self: center;
  justify-self: end;
  margin-right: 16px;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
