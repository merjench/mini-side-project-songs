import React, { Component } from 'react';
import { connect } from 'react-redux';
//need a curly braces below because we are importing named export vs export default
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => this.props.selectSong(song)}
            >
          Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
      )
    })

  }

  render() {
    // console.log(this.props)
    //this.props === { songs: state.songs }
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

// this funtion a lot of the times is also named mapStateToProps
const getMyState = (state) => {
  // console.log(state, "this is SongList")
  return { songs: state.songs };
}


//first set of parentices returns a function and the second set of envokes the funtion we have returned
export default connect(getMyState, { selectSong })(SongList);
