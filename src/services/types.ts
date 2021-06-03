export type Action = {
  type: string;
  payload?: Joke;
  index?: number
};

export type Joke = {
  icon_url: string;
  id: string;
  url: string;
  value: string;
};

export type MyState = {
  joke: Joke | null;
  topList: (Joke | undefined | null)[] | [];
  isTimer: boolean;
  loading: boolean;
  isTopListOpen: boolean;
};

export type ActionCreator = (joke?: Joke) => Action;

export type MyReducer = (
  state: MyState | undefined,
  action: Action
) =>
  | MyState
  | {
      joke: Joke | undefined;
      topList: (Joke | null | undefined)[] | [];
      isTimer: boolean;
      loading: boolean;
      isTopListOpen: boolean;
    };

export interface ButtonPropsInterface {
  onClick: (joke?: Joke) => void;
  label: string;
}
