import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { colorType, getColor, radius, spaces } from './styles';
import { Icons } from './icons';
import { Text, Tile } from '.';

interface Props {
  title: string;
  text: string;
  icon: Icons;
  color: Extract<
    colorType,
    | 'semantic-success-1'
    | 'semantic-success-2'
    | 'semantic-error-1'
    | 'semantic-error-2'
    | 'semantic-warning-YL1'
    | 'semantic-warning-YL2'
    | 'semantic-warning-OR1'
    | 'semantic-warning-OR2'
    | 'primitive-blue-900'
    | 'neutral-black'
  >;
}

export const Banner: FC<Props> = (props) => {
  return (
    <Tile
      title={<Text $type="Button">{props.title}</Text>}
      body={<Text $type="Caption/L">{props.text}</Text>}
      color={props.color}
      borderWidth="3px"
    />
  );
};
