import styled, { css } from 'styled-components';
import { spaces, useTypography, getColor, Pagenation, Checkbox } from '.';
import { useMemo, useState } from 'react';

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
  const [currentPage, setCurrentPage] = useState(0);

  const { pageSize, pageCount } = useMemo(() => {
    const pageSize = inPageSize ?? list.length;
    const pageCount = Math.ceil(list.length / pageSize);
    return { pageSize, pageCount };
  }, [inPageSize]);

  const getPageList = (p: number) =>
    list.slice(p * pageSize, p * pageSize + pageSize);

  const [inPageList, setInPageList] = useState(getPageList(currentPage));
  const movePage = (p: number) => {
    setCurrentPage(p);
    setInPageList(getPageList(p));
  };

  const [selected, setSelected] = useState<T[] | undefined>(selectedList);
  const update = (v: T, checked: boolean) => {
    if (!selected) return;
    let xs: T[] = [];
    if (checked && !selected.includes(v)) {
      xs = [...selected, v];
    } else if (selected.includes(v)) {
      xs = selected.filter((x) => x !== v);
    }
    setSelected(xs);
    onChange && onChange(xs);
  };
  const cs = useMemo(() => {
    if (!selected) return columns;
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
              onChange={(e) => update(x, e.target.checked)}
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
              const tds = cs.map((c, ci) => (
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
