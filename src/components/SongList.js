import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {

  render() {
    // console.log(this.props)
    //this.props === { songs: state.songs }

    return <div>SongList</div>
  }
}

// this funtion a lot of the times is also named mapStateToProps
const getMyState = (state) => {
  // console.log(state, "this is SongList")
  return { songs: state.songs };
}


//first set of parentices returns a function and the second set of envokes the funtion we have returned
export default connect(getMyState)(SongList);
