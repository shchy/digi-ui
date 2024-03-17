import { styled, css } from 'styled-components';
import { getColor } from './styles';

export const Fieldset = styled.fieldset`
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
`;
