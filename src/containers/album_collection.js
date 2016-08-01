import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAlbum } from '../actions/index';
import { bindActionCreators } from 'redux';

class AlbumCollection extends Component {
    renderListAlbums() {
        return this.props.albums.map((album) => {
            return (
                <li key={album.title}
                    onClick={() => this.props.selectAlbum(album)}
                    className='list-group-item'>
                    { album.title }
                </li>
            );
        });
    }

    render() {
        return (
            <ul id="listAlbums" className="list-group col-sm-4">
                <h1>Album List:</h1><br />
                {this.renderListAlbums()}
            </ul>
        );
    }
}


function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside AlbumCollection
    return {
      albums: state.albums
    };
}

// Anything returned from this function will end up as props
// on the AlbumCollection container
function mapDispatchToProps(dispatch) {
    // Whenever selectAlbum is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectAlbum: selectAlbum }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCollection);