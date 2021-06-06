export type Action = {
  type: string;
  payload?: Joke;
  index?: number;
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

export type ActionCreator = (arg?: any) => Action;

export type ButtonPropsInterface = {
  onClick: (joke?: Joke) => any;
  label: string;
}
