import styled, { css } from 'styled-components';
import { spaces, useTypography, getColor, Pagenation } from '.';
import { useState } from 'react';

export interface TableColumnInfo<T> {
  header: string;
  data: (x: T) => string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: string | number;
  colSpan?: number;
}

interface TableStyle {
  width?: string | number;
  height?: string | number;
  borderLine?: 'cross' | 'horizontal';
}
interface Props<T> {
  list: T[];
  columns: TableColumnInfo<T>[];
  caption?: string;
  style?: TableStyle;
  inPageSize?: number;
  compactPager?: boolean;
}

export const Table = <T,>({
  list,
  columns,
  caption,
  style,
  inPageSize,
  compactPager,
}: Props<T>) => {
  const pageSize = inPageSize ?? list.length;
  const pageCount = Math.ceil(list.length / pageSize);
  const [currentPage, setCurrentPage] = useState(0);
  const getPageList = (p: number) =>
    list.slice(p * pageSize, p * pageSize + pageSize);

  const [inPageList, setInPageList] = useState(getPageList(currentPage));
  const movePage = (p: number) => {
    setCurrentPage(p);
    setInPageList(getPageList(p));
  };

  return (
    <>
      <Frame $v={style}>
        <table>
          {caption && <caption>{caption}</caption>}
          <thead>
            <tr>
              {columns.map((c, ci) => (
                <th
                  key={ci}
                  colSpan={c.colSpan}
                  style={{ textAlign: c.align, width: c.width }}
                >
                  {c.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {inPageList.map((r, ri) => {
              const tds = columns.map((c, ci) => (
                <td
                  key={ci}
                  colSpan={c.colSpan}
                  style={{ textAlign: c.align, width: c.width }}
                >
                  {c.data(r)}
                </td>
              ));
              return <tr key={ri}>{tds}</tr>;
            })}
          </tbody>
        </table>
      </Frame>
      {pageCount > 1 && (
        <Pagenation
          compact={compactPager}
          pageCount={pageCount}
          page={currentPage}
          onPage={(next) => movePage(next)}
        />
      )}
    </>
  );
};

const Frame = styled.div<{
  $v?: TableStyle;
}>`
  ${() => useTypography('Body/L')};
  overflow-x: scroll;
  ${({ $v }) => {
    if (!$v) return;
    return css`
      width: ${$v.width};
      height: ${$v.height};
    `;
  }}
  table {
    width: 100%;
    border-collapse: collapse;
    white-space: nowrap;
    border: 1px solid ${getColor('neutral-solid-grey-200')};
  }
  table th,
  table td {
    padding: ${spaces.XS};
    text-align: left;
    vertical-align: middle;
  }

  table th {
    /* position: sticky;
    top: 0; */
    background-color: ${getColor('neutral-solid-grey-50')};

    ${({ $v }) => {
      if (!$v || !$v.borderLine || $v.borderLine === 'cross') {
        return css`
          border: 1px solid ${getColor('neutral-solid-grey-200')};
        `;
      }
      if ($v.borderLine === 'horizontal') {
        return css`
          border-top: 1px solid ${getColor('neutral-solid-grey-200')};
          border-bottom: 1px solid ${getColor('neutral-solid-grey-200')};
        `;
      }
    }}
  }

  table td {
    ${({ $v }) => {
      if (!$v || !$v.borderLine || $v.borderLine === 'cross') {
        return css`
          border: 1px solid ${getColor('neutral-solid-grey-200')};
        `;
      }
      if ($v.borderLine === 'horizontal') {
        return css`
          border-bottom: 1px solid ${getColor('neutral-solid-grey-200')};
        `;
      }
    }}
  }
`;
