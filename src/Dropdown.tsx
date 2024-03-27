import React, { FC } from 'react';
import { styled } from 'styled-components';
// import { getColor, useTypography } from '../../../src/styles';
import { Text, Fieldset } from '.';
import { Icon, IconProps } from './icons';
// import { hasError, toArray } from '../../../src/utils';

type Props = {
  label: string;
  disabled?: boolean;
  beforeIcon?: IconProps;
  afterIcon?: IconProps;
};

export const Dropdown: FC<Props> = (props) => {
  return (
    <Root disabled={props.disabled}>
      {props.beforeIcon && <Icon {...props.beforeIcon} />}
      <Text $type="Body/M">{props.label}</Text>
      <Icon name="ArrowDown" />
      {/* <Button
        {...props}
        size="Medium"
        type="Tertiary"
        afterIcon={{ name: 'ArrowDown' }}
      /> */}
      {/* <LabelFrame>
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
        <SelectFrame>
          <Select
            ref={ref}
            name={props.name}
            required={props.required}
            disabled={props.disabled}
            value={props.selectedItem && props.selectKey(props.selectedItem)}
            onChange={props.onChange}
            onBlur={props.onBlur}
            $state={{
              hasError: hasError(props.errorText),
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
        {!props.disabled &&
          toArray(props.errorText)?.map((x, i) => (
            <Text key={i} $type="Caption/L" $color="semantic-error-1" $block>
              {x}
            </Text>
          ))} */}
    </Root>
  );
};

const Root = styled(Fieldset)<{ $width?: string }>`
  display: flex;
  flex-direction: Row;
  align-items: center;
  gap: 4px;
`;

// const LabelFrame = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   padding: 0px;
//   gap: 8px;
// `;

// const SelectFrame = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: 1fr;
//   width: 100%;
// `;

// const Select = styled.select<{
//   $state?: {
//     hasError: boolean;
//   };
// }>`
//   grid-column: 1/2;
//   grid-row: 1/2;
//   appearance: none;

//   ${() => useTypography('Body/L')}
//   min-width: calc(327px - 32px - 2px);
//   height: 56px;
//   padding: 12px 16px;

//   border-radius: 8px;
//   border: ${(props) => {
//     if (props.$state?.hasError)
//       return `1px solid ${getColor('semantic-error-1')}`;
//     return `1px solid ${getColor('neutral-solid-grey-900')}`;
//   }};

//   &:focus {
//     outline: ${() => {
//       return `4px solid ${getColor('focus-yellow')}`;
//     }};
//   }
//   &:disabled {
//     border: ${(props) => {
//       return `1px solid ${getColor('neutral-solid-grey-420')}`;
//     }};
//     background-color: ${(props) => {
//       return getColor('neutral-solid-grey-50');
//     }};
//   }
// `;

// const SelectIcon = styled.div`
//   grid-column: 1/2;
//   grid-row: 1/2;
//   align-self: center;
//   justify-self: end;
//   margin-right: 16px;
//   pointer-events: none;
// `;
