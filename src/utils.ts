export const toArray = <T>(x: T | T[] | undefined) => {
  if (!x) return;
  return Array.isArray(x) ? x : [x];
};
export const hasError = (errorText: string | string[] | undefined) => {
  return !!toArray(errorText);
};
