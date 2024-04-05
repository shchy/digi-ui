import { useState } from 'react';

export const toArray = <T>(x: T | T[] | undefined) => {
  if (!x) return;
  return Array.isArray(x) ? x : [x];
};
export const hasError = (errorText: string | string[] | undefined) => {
  return !!toArray(errorText);
};
export const prevent = <T extends Element>(
  f: (e: React.MouseEvent<T>) => void
) => {
  return (e: React.MouseEvent<T>) => {
    e.preventDefault();
    f(e);
  };
};
export const hashCode = (x: object | string) => {
  const s = typeof x === 'object' ? JSON.stringify(x) : x;
  let hash = 0;
  for (const c of s) {
    hash = ((hash << 5) - hash + c.charCodeAt(0)) | 0;
  }
  return hash;
};

export const useSelectedList = <T>(
  init: T[],
  hook?: (xs: T[]) => void
): [T[], (v: T, checked: boolean) => void] => {
  const [selectedItems, setSelectedItems] = useState<T[]>(init);
  const update = (v: T, checked: boolean) => {
    let xs: T[] = [];
    if (checked && !selectedItems.includes(v)) {
      xs = [...selectedItems, v];
    } else if (selectedItems.includes(v)) {
      xs = selectedItems.filter((x) => x !== v);
    }
    setSelectedItems(xs);
    hook && hook(xs);
  };

  return [selectedItems, update];
};

export const createChangeCheckedHandler = <T>(
  list: T[],
  selectKey: (x: T) => string,
  update: (v: T, checked: boolean) => void
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const findOne = list.find((x) => selectKey(x) === e.target.value);
    if (!findOne) return;
    update(findOne, e.target.checked);
  };
};
