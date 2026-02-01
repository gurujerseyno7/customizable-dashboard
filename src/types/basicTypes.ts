//types for primitive values
type PrimitiveTypes = {
  string: string;
  number: number;
  boolean: boolean;
  null: null;
  undefined: undefined;
  whatever: string | number | boolean | null | undefined;
};

//types for non primitive values
type NonPrimitiveTypes = {
  array: [];
  function: Function;
};

//type for void function - function returns nothing
type VoidFunc<T> = (params: T) => void;
export type { PrimitiveTypes, NonPrimitiveTypes, VoidFunc };
