export type Values<T extends object> = T[keyof T];

export type Keys<T extends object> = keyof T;
