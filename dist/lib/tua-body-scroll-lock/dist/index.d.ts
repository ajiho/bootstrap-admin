type Nullable<T> = T | Array<T> | null;
export interface BSLOptions {
    overflowType?: 'hidden' | 'clip';
}
declare const lock: (targetElement?: Nullable<HTMLElement>, options?: BSLOptions) => void;
declare const unlock: (targetElement?: Nullable<HTMLElement>) => void;
declare const clearBodyLocks: () => void;
export { lock, unlock, clearBodyLocks };
