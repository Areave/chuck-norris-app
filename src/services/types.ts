
export interface Action {
  type: string;
  payload:Joke
}

export interface Joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
};

export interface State {
  joke:Joke,
  topList:Array<Joke>,
  isTimer: boolean,
  loading:boolean
}

