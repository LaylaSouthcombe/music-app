import React, { useState } from 'react'

const AddButton = ({ songs, result, setSongs, refreshSongs }) => {
    // const [ songs, setSongs ] = useState([]);
    console.log(result)
    const handleAdd = e => {
        e.stopPropagation()
        // console.log(songs)
    songs.push(e.target.id)
    setSongs(songs)
    refreshSongs(songs)
    // console.log(songs)
        // setFaved(!faved)
    }
    
    return(
        <span role="switch" onClick={handleAdd} style={{fontSize: "40px" }} id={result}>"🖤"</span>
    )
}

export default AddButton;