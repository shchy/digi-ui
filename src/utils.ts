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
