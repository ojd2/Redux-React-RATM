export function selectAlbum(album) {
    // Create an ActionReducer -> ALBUM_SELECTED -> When an album in our
    // renderer is selected we trigger the ALBUM_SELECTED action.
    // The payload -> a passed arg. In this case, we pass an album.
    return {
        type: 'ALBUM_SELECTED', // Trigger Action 
        payload: album // Return arg
    };
}