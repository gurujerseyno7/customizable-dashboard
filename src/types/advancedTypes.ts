import type { PrimitiveTypes } from "./basicTypes";

//dynamic type for objects using index signatures
type IndexedTypes<T> = {
  [key: PrimitiveTypes["string"] | PrimitiveTypes["number"]]: T;
};

//dynamic type for objects using mapped types
type MappedTypes<K extends string | number | symbol, T> = {
  [key in K]: T;
};

//dynamic type for objects of different types
type MultipleMappedTypes<T> = {
  [P in keyof T]: T[P];
};

//type for partial types
type PartialType<T> = Partial<T>;
export type { IndexedTypes, MappedTypes, MultipleMappedTypes, PartialType };
