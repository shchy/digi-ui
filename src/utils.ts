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
