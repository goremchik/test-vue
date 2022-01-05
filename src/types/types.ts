export type EmptyCallback = () => void;
export type AnyCallback = (...args: any[]) => any;
export type Timer =
  | ReturnType<typeof setTimeout>
  | ReturnType<typeof setInterval>
  | null;
