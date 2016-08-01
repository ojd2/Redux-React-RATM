import React, { Component } from 'react';
import AlbumCollection from '../containers/album_collection';
import AlbumDetail from '../containers/album_detail';
// Extend our React Components into HTML and source from ./containers:
export default class App extends Component {
  render() {
    return (
      <div>
        <AlbumCollection />
        <AlbumDetail />
      </div>
      );
  };
}
