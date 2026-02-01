import type {
  QueryObserverResult,
  RefetchOptions,
} from "@tanstack/react-query";

//type for tanstack query props
type TanStackQueryTypes = {
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<unknown, Error>>;
};

export type { TanStackQueryTypes };
