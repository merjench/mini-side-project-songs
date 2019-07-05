import React from 'react';
//need a curly braces below because we are importing named export vs export default
// import { selectSong } from '../actions';
import SongList from './SongList'

//funtional component vs class based component because all our state now will be stored inside redux

const App = () => {

  return (
    <div>
  <SongList />
    </div>
  )      
}

export default App;
