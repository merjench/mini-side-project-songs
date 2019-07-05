import { combineReducers } from 'redux';



const songsReducer = () => {
  return [
    { title: 'Kiss me baby One more Time', duration: '4:05' },
    { title: 'Macerena', duration: '2:45' },
    { title: 'All Star', duration: '3:12' },
    { title: 'I want it that way', duration: '3:05' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
    return selectedSong
 };


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
