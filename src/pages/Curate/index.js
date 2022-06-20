import React, { useState, useEffect } from 'react';
import { SongForm } from '../../components'
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
    
      
    
      return (
        <SongForm token={token}/>


//brings back 5 results
//add to list if correct
                

        
        
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