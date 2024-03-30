import { FC } from 'react';
import styled, { css } from 'styled-components';
import { spaces } from './styles';
import { Icon, IconProps } from './icons';
import { Text } from './Text';

type Props = {
  label: string;
  direction?: 'row' | 'column';
  onClick?: () => void;
} & IconProps;
export const IconButton: FC<Props> = (props) => {
  return (
    <Root $v={props} onClick={props.onClick}>
      <IconContainer>
        <Icon {...props} $textType="Body/L" />
      </IconContainer>
      <LabelContainer>
        <InnerText $type="Body/M">{props.label}</InnerText>
      </LabelContainer>
    </Root>
  );
};

const Root = styled.div<{ $v: Omit<Props, 'onClick'> }>`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${({ $v: { direction } }) => {
    if ((direction ?? 'row') === 'column') {
      return css`
        flex-direction: column;
      `;
    } else {
      return css`
        flex-direction: row;
        gap: ${spaces.XS};
        min-width: 3rem;
      `;
    }
  }};
`;
const IconContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;
const LabelContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const InnerText = styled(Text)`
  cursor: pointer;
  white-space: nowrap;
`;
