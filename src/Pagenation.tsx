import React from 'react';
import styled, { css } from 'styled-components';
import { Text, CircleButton, spaces, useTypography, media } from '.';
import { Dots, EndPageArrow, FirstPageArrow, Icon } from './icons';

interface Props {
  pageCount: number;
  page?: number;
  onPage?: (next: number) => void;
  compact?: boolean;
}

export const Pagenation = ({ pageCount, page, onPage, compact }: Props) => {
  const safePageCount = Math.ceil(pageCount);
  const isFull = safePageCount >= 7 && !media.isLessThan('medium');
  const safePage = (() => {
    const p = page ?? 0;
    if (p < 0) return 0;
    else if (safePageCount - 1 < p) return safePageCount - 1;
    return p;
  })();
  const befores = [safePage - 3, safePage - 2, safePage - 1];
  const afters = [safePage + 1, safePage + 2, safePage + 3];
  const existsPage = (p: number) => 0 <= p && p < safePageCount;

  return (
    <Frame>
      <CircleButton
        compact={compact}
        onClick={() => onPage && onPage(0)}
        disabled={!existsPage(0) || 0 === safePage}
      >
        <FirstPageArrow />
      </CircleButton>
      <CircleButton
        compact={compact}
        onClick={() => onPage && onPage(safePage - 1)}
        disabled={!existsPage(safePage - 1)}
      >
        <Icon name="ArrowLeft" />
      </CircleButton>
      {isFull && (
        <>
          <Dots />
          {befores.map((p, i) => {
            const key = `b-${i}`;
            return (
              <CircleButton
                key={key}
                compact={compact}
                onClick={() => onPage && onPage(p)}
                style={{ visibility: !existsPage(p) ? 'hidden' : 'visible' }}
              >
                <Text>{p + 1}</Text>
              </CircleButton>
            );
          })}
        </>
      )}

      <Text>
        {safePage + 1}/{safePageCount}
      </Text>

      {isFull && (
        <>
          {afters.map((p, i) => {
            const key = `a-${i}`;
            return (
              <CircleButton
                key={key}
                compact={compact}
                onClick={() => onPage && onPage(p)}
                style={{ visibility: !existsPage(p) ? 'hidden' : 'visible' }}
              >
                <Text>{p + 1}</Text>
              </CircleButton>
            );
          })}
          <Dots />
        </>
      )}
      <CircleButton
        compact={compact}
        onClick={() => onPage && onPage(safePage + 1)}
        disabled={!existsPage(safePage + 1)}
      >
        <Icon name="ArrowRight" />
      </CircleButton>
      <CircleButton
        compact={compact}
        onClick={() => onPage && onPage(safePageCount - 1)}
        disabled={
          !existsPage(safePageCount - 1) || safePageCount - 1 === safePage
        }
      >
        <EndPageArrow />
      </CircleButton>
    </Frame>
  );
};

const Frame = styled.div`
  ${() => useTypography('Body/L')};
  display: flex;
  flex-direction: row;
  gap: ${spaces.M};
  margin: ${spaces.S} ${spaces.M};
  justify-content: center;
  align-items: center;
`;
