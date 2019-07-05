import React from 'react';
import SongList from './SongList'
import SongDetail from './SongDetail'

//funtional component vs class based component because all our state now will be stored inside redux

const App = () => {

  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  )
}

export default App;
