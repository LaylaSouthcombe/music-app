import React, { useState, useEffect } from 'react';
import axios from 'axios';
const qs = require('qs');
const data = qs.stringify({
    'grant_type': 'client_credentials' 
  });

function Curate () {

    const [token, setToken] = useState([])

    useEffect(() => {
        const config = {
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            headers: { 
              'Authorization': 'Basic ODZhZTU1OGMzNTU4NDM1Y2I3OTk1NTFhNjlmNmQ5MWY6YjBkNmJhZTAzOTRlNDc4ZDhlMTI4ZDA0MGM1MGZkMTk=', 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };
        const fetchToken = async () => {
            axios(config)
                .then(function (response) {
                const token = response.data.access_token
                console.log(token)
                setToken(token)
                })
                .catch(function (error) {
                console.log(error);
                });
        }
        
        fetchToken()
        
    }, [])

console.log('outside token', token)
    
      useEffect(() => {
        const config = {
            method: 'GET',
            url: 'https://api.spotify.com/v1/search?q=track:youth+artist:glass%20animals&type=track',
            headers: { 
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
          };
          const fetchSong = async () => {
            axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    console.log(response.data.tracks.items[0].id);
                })
                .catch(function (error) {
                    console.log(error);
                });
          }
          fetchSong()
          
      }, [])
    
      return (
        
            <button >
d
            </button>





          /* <form onSubmit={buttonClicked}>        
              <Dropdown label="Genre :" options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} />
              <Dropdown label="Playlist :" options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} />
              <div className="col-sm-6 row form-group px-0">
                <button type='submit' className="btn btn-success col-sm-12">
                  Search
                </button>
              </div> */
              /* <div className="row"> */

                /* <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />
                {trackDetail && <Detail {...trackDetail} /> } */
              /* </div>         */
          /* </form> */
        // </div>
        
        
      );
    }
    // return(
    //     <h1>Curate your own song list</h1>

    // )
// }

//form that adds a song component underneath
//finds spotify id from spotify api


// https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator&theme=0

export default Curate;