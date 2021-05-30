import {Action, State} from './types';

const initialState: State = {
  joke: {
    icon_url: '',
    id: '',
    url: '',
    value: '',
  },
  topList: [
    {
      icon_url: '',
      id: '',
      url: '',
      value: '',
    },
  ],
  isTimer: true,
  loading: true,

  // joke:null,
  // topList:null,
  // isTimer: false,
  // loading:true
};

const reducer = (state:State = initialState, action: Action) => {
  switch (action.type) {
    case 'JOKE_LOADED':
      return state;
  }
};

export default reducer;
