import type { RefObject } from "react";

//type for react inbuilt hooks and methods
type SetStateUpdate<T> = React.Dispatch<React.SetStateAction<T>>;

//type for react elements
type ReactElement = React.ReactElement;

//type for useRef return value
type RefReturnValue<T> = RefObject<T>;

export type { SetStateUpdate, ReactElement, RefReturnValue };
