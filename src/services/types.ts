export type Action = {
  type: string;
  payload?: Joke;
};

export type Joke = {
  icon_url: string;
  id: string;
  url: string;
  value: string;
};

export type State = {
  joke: Joke | null;
  topList: (Joke|undefined)[]|[];
  isTimer: boolean;
  loading: boolean;
  isTopListOpen:boolean
};

export type ActionCreator = (joke?: Joke) => Action;

export interface ButtonPropsInterface {
  onClick: (joke?: Joke) => void;
  label: string;
}

