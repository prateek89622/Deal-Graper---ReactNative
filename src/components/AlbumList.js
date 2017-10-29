// Import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native'; 
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Make a component
class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(responce => this.setState({ albums: responce.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
// Make the component available to other parts of the app
export default AlbumList;
