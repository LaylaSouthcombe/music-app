import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { AddButton } from '../../components'
//use redux so listens remain


//have five result components


const Results = ({ results, songs, setSongs, refreshSongs, handleAddSong }) => {
    return (
        <div className="resultsDiv">
            { 
                results.map((result, i) => (
                    <div className="result">
                        <div className="resultInfo" key={i}>
                        </div>
                        <div className="spotifyResultEmbed">
                            <iframe src={`https://open.spotify.com/embed/track/${result}?utm_source=generator&theme=0`} width="100%" height="80" frameBorder="0"></iframe>
                            <AddButton songs={songs} result={result} setSongs={setSongs} refreshSongs={refreshSongs} handleAddSong={handleAddSong}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Results;