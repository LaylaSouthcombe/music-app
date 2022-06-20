import React, {useState, useEffect} from 'react'
import axios from 'axios';
//use redux so listens remain
const SongForm = ({ token }) => {
    const [query, setQuery] = useState("")

    useEffect(() => {
        const config = {
            method: 'GET',
            url: 'https://api.spotify.com/v1/search?q=track:youth+artist:glass%20animals&type=track&offset=0&limit=5',
            headers: { 
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
          };
        //   const fetchSong = async () => {
        //     axios(config)
        //         .then(function (response) {
        //             // console.log(JSON.stringify(response.data));
        //             console.log(response.data.tracks.items[0].id);
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        //   }

          const fetchSong = async () => {
            const { data } = await axios(config)
            console.log(data)
                    // console.log(JSON.stringify(response.data));
                    console.log(data.tracks.items[0].id);                         
          }

          fetchSong()
          
      }, [ token ])



    return (
        <>
            <p>Listens:</p>
            <button >Up</button>
        </>
        
    )
}

export default SongForm;