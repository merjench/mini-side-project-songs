//Action Creator


export const selectSong  = (song) => {
  //return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }

}


//instead of creating default export we create named export that allows us to export multiple different functions from a single file
