import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song){
        return <div>Select a song:</div>
    }
    return (
        <div>
            <h2>Details for:</h2>
            <h3>
                Title: {song.title}
                <br />
                Duration: {song.duration}
                <br />
                Author: {song.author}
            </h3>
        </div>
    )
}

const matStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(matStateToProps)(SongDetail);