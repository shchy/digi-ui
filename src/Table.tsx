import styled, { css } from 'styled-components';
import { spaces, useTypography, getColor, Pagenation, Checkbox, Text } from '.';
import { useMemo, useState } from 'react';
import { hashCode, useSelectedList } from './utils';
import { Icon } from './icons';

export type SortOrder = 'none' | 'asc' | 'desc';
export const defaultSort = <T,>(
  getter: (x: T) => string | number | object | Date | boolean
) => {
  return (x: T, y: T) => {
    const xv = getter(x);
    const yv = getter(y);
    return xv === yv ? 0 : xv < yv ? -1 : 1;
  };
};

export interface TableColumnInfo<T> {
  header: string;
  data: (x: T) => string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: string | number;
  colSpan?: number;
  onSort?: (a: T, b: T) => number;
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
  selectedList?: T[];
  onChange?: (selected: T[]) => void;
}

// TODO ヘッダクリックイベント追加してソート

export const Table = <T,>({
  list,
  columns,
  caption,
  style,
  inPageSize,
  compactPager,
  selectedList,
  onChange,
}: Props<T>) => {
  const [sortOrder, setSortOrder] = useState<{
    column: TableColumnInfo<T>;
    order: SortOrder;
    compare: (a: T, b: T) => number;
  }>();
  const onSortHandler = (c: TableColumnInfo<T>) => {
    if (!c.onSort) return;
    const isSameColumn = sortOrder && sortOrder.column === c;
    const nextOrder = isSameColumn
      ? sortOrder.order === 'asc'
        ? 'desc'
        : sortOrder.order === 'desc'
        ? 'none'
        : 'asc'
      : 'asc';
    setSortOrder({ column: c, compare: c.onSort, order: nextOrder });
  };
  const sortIcon = (c: TableColumnInfo<T>) => {
    const order =
      sortOrder && sortOrder.column === c ? sortOrder.order : undefined;
    if (!order || order === 'none') return <></>;
    return order === 'asc' ? (
      <Icon name="ArrowDown" />
    ) : (
      <Icon name="ArrowUp" />
    );
  };

  const sortedList = useMemo(() => {
    console.log('list', list);
    if (!sortOrder || sortOrder.order === 'none' || !sortOrder.compare)
      return list;
    const ascOrdered = list.sort(sortOrder.compare);
    if (sortOrder.order === 'asc') {
      return ascOrdered;
    } else {
      return ascOrdered.reverse();
    }
  }, [list, sortOrder]);

  const [currentPage, setCurrentPage] = useState(0);
  const { pageSize, pageCount } = useMemo(() => {
    const pageSize = inPageSize ?? sortedList.length;
    const pageCount = Math.ceil(sortedList.length / pageSize);
    console.log('pageCount', pageCount);
    return { pageSize, pageCount };
  }, [inPageSize, sortedList]);

  const inPageList = useMemo(() => {
    return sortedList.slice(
      currentPage * pageSize,
      currentPage * pageSize + pageSize
    );
  }, [sortedList, sortOrder, currentPage, pageSize]);

  const movePage = (p: number) => {
    setCurrentPage(p);
  };

  const [selected, updateSelected] = useSelectedList<T>(
    selectedList ?? [],
    onChange
  );

  const cs = useMemo(() => {
    if (!selectedList) return columns;
    return [
      {
        header: '',
        width: 0,
        data: (x) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Checkbox
              isSimple
              checked={selected.includes(x)}
              onChange={(e) => updateSelected(x, e.target.checked)}
            />
          </div>
        ),
      } as TableColumnInfo<T>,
      ...columns,
    ];
  }, [columns]);

  return (
    <>
      <Frame $v={style}>
        <table>
          {caption && <caption>{caption}</caption>}
          <thead>
            <tr>
              {cs.map((c, ci) => (
                <th
                  key={hashCode({ c, ci })}
                  colSpan={c.colSpan}
                  style={{ width: c.width }}
                  onClick={() => onSortHandler(c)}
                >
                  <div>
                    <Text $noWrap style={{ textAlign: c.align }}>
                      {c.header}
                    </Text>
                    {sortIcon(c)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {inPageList.map((r, ri) => {
              const tds = cs.map((c, ci) => (
                <td
                  key={hashCode({ c, ci })}
                  colSpan={c.colSpan}
                  style={{ textAlign: c.align, width: c.width }}
                >
                  {c.data(r)}
                </td>
              ));
              return <tr key={hashCode({ r, ri })}>{tds}</tr>;
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
    white-space: nowrap;
  }

  table th div {
    display: flex;
    flex-direction: row;
    align-items: center;
    *:first-child {
      flex: 1;
    }
    white-space: nowrap;
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
