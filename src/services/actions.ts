import { Joke } from "./types";


const jokeLoaded = (joke:Joke) => ({
type:"JOKE_LOADED",
payload:joke
})

export {jokeLoaded}