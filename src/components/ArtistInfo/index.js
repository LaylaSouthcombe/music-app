import React from 'react';

const ArtistInfo = ({artist}) => {
    return (
    <div className="artistInfo">
        <h1>{artist.name}</h1>
        <h3>Genre: {artist.genre}</h3>
        <h3>Albums: {artist.albums}</h3>
    </div>
    )
}

export default ArtistInfo