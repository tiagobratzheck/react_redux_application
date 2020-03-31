import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05', author: 'TLC'},
        { title: 'Macarena', duration: '2:30', author: 'Los Del Rio'},
        { title: 'All Star', duration: '3:15', author: 'Smash Mouth'},
        { title: 'I Want it That Way', duration: '1:45', author: 'Backstreet Boys'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})