type TGeneric<T> = T | null;
export interface ListResponse<T> {
  data: T[];
  status: TGeneric<string>;
  error: TGeneric<string>;
}

export interface ItemResponse<T> {
  data: T;
  status: boolean;
  error: TGeneric<string>;
}
