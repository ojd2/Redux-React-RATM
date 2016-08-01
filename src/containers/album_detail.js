import React, { Component } from 'react';
import { connect } from 'react-redux';
class AlbumDetail extends Component {
    render() {
        if (!this.props.album) {
            return <div><h2>Select an Album to get started:</h2></div>
        }

        return (
            <div id="details">
                
                <div><h3 className="albumTitle">{ this.props.album.title }</h3>
                    <img className="artwork" src={this.props.album.artwork_url} style={{width: 100, height: 100}} /><br />
                    <b>Artist:</b> { this.props.album.artist }<br />
                    <b>Title:</b> { this.props.album.title }<br />
                    <b>Release Date</b>: { this.props.album.rel_date }<br />
                    <b>Tracks</b>: { this.props.album.tracks }<br />
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      album: state.activeAlbum
    };
}
export default connect(mapStateToProps)(AlbumDetail);

