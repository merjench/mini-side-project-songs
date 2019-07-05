import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
  // console.log(song, "from SongDetail")
  if (!song){
    return <div>Select a Song</div>;
  }
    return (
      <div>
        <h3>Details for:</h3>
        <p>
        Title: {song.title}
        <br />
        Duration:{song.duration}
        </p>
      </div>
    )
 };

const getMyState = (state) => {
   return { song:state.selectedSong }
}

export default connect(getMyState)(SongDetail);
