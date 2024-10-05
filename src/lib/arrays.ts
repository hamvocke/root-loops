/**
 * Object.groupBy is not natively supported by the current nodejs LTS version.
 * It's available from node 21 onwards. Unfortunately the provided playwright docker
 * images still ship with node 20, and to make 'groupBy' work, we need to polyfill it right here.
 * Once we're on node >= 21 everywhere, we can simply remove this polyfill.
 */
export function groupBy<T>(array: T[], predicate: (value: T, index: number, array: T[]) => string) {
  return array.reduce(
    (acc, value, index, array) => {
      (acc[predicate(value, index, array)] ||= []).push(value);
      return acc;
    },
    {} as { [key: string]: T[] },
  );
}
