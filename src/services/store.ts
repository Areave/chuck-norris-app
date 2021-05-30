import {createStore} from 'redux'
import reducer from './reducer';

const store = createStore(reducer);

export default store;


// "No overload matches this call.\n  
// Overload 1 of 2, '(reducer: Reducer<State, Action>, enhancer?: StoreEnhancer<unknown, unknown> | undefined): Store<State, Action>', gave the following error.\n    Argument of type '(state: State | undefined, action: Action) => State | undefined' is not assignable to parameter of type 'Reducer<State, Action>'.\n      Type 'State | undefined' is not assignable to type 'State'.\n        Type 'undefined' is not assignable to type 'State'.\n  Overload 2 of 2, '(reducer: Reducer<State, Action>, preloadedState?: { joke: { icon_url: string; id: string; url: string; value: string; }; topList: { icon_url: string; id: string; url: string; value: string; }[]; isTimer: boolean; loading: boolean; } | undefined, enhancer?: StoreEnhancer<...> | undefined): Store<...>', gave the following error.\n    Argument of type '(state: State | undefined, action: Action) => State | undefined' is not assignable to parameter of type 'Reducer<State, Action>'.",

// reducer: Reducer<State, Action>, 
// enhancer?: StoreEnhancer<unknown, unknown> | undefined): 
// Store<State, Action>