import { styled, css } from 'styled-components';
import { getColor } from './styles';

export const Fieldset = styled.fieldset<{ $componentWidth?: number | string }>`
  border: none;
  padding: 0;
  margin: 0;
  ${(props) => {
    if (!props.disabled) return;
    return css`
      * {
        color: ${getColor('neutral-solid-grey-420')};
      }
    `;
  }}
  width: ${(props) => props.$componentWidth ?? 'auto'};
`;
