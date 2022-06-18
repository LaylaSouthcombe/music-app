import React, {useState} from 'react';
import {Listens} from '../../components'

const Songs = ({ songs }) => {
    return (
        <>
            { 
                songs.map((song, i) => (
                    <div className="songDiv">     
                        <div className="songInfo" key="i">
                            <h2>{song.title}</h2>
                            <p>Released: {song.releaseDate}</p>
                        </div>
                        <div className="spotifyEmbed">
                            <iframe src={song.spotify} width="100%" height="80" frameBorder="0"></iframe>
                            <Listens />
                        </div>
                        <div className="songImg">
                            <img src={song.img} alt={song.alt} />
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Songs