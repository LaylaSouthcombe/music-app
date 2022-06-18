import React, {useState} from 'react';

const Songs = ({ songs }) => {
    const [listens, setListens] = useState(0)
    const increaseListens = () => {setListens(listens => listens + 1)}
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
                            <p>Listens: {listens}</p>
                            <button onClick={increaseListens}>Up</button>
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