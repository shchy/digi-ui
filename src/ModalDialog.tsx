import React, { FC, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { getColor, media, radius, spaces, zIndex } from './styles';
import { Modal, Tile, Text, Button } from '.';

interface Props {
  isOpen: boolean;
  title: string;
  text: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  onResult?: (confirm: boolean) => void;
}

export const ModalDialog: FC<Props> = ({
  isOpen,
  title,
  text,
  primaryButtonLabel,
  secondaryButtonLabel,
  onResult,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={() => onResult && onResult(false)}>
      <Tile
        height="fill"
        noPadding
        borderWidth="0"
        title={<Text $type="Headline/S">{title}</Text>}
        body={<Text>{text}</Text>}
        footer={
          <Footer>
            <Button
              buttonType="Primary"
              onClick={() => onResult && onResult(true)}
            >
              {primaryButtonLabel ?? 'OK'}
            </Button>
            <Button
              buttonType="Secondary"
              onClick={() => onResult && onResult(false)}
            >
              {secondaryButtonLabel ?? 'Cancel'}
            </Button>
          </Footer>
        }
      />
    </Modal>
  );
};

const Footer = styled.div`
  align-self: normal;
  display: flex;
  flex-direction: column;
  gap: ${spaces.XS};
  height: fit-content;
`;
