import React, { useState, useEffect } from 'react';
import { Songs, Results } from '../../components'
import axios from 'axios';
const qs = require('qs');
const data = qs.stringify({
    'grant_type': 'client_credentials' 
  });

function Curate () {
    const [songs, setSongs] = useState([{ title: "I Don't Wanna Talk (I Just Wanna Dance)", releaseDate: "2022", img: "https://dailyutahchronicle.com/wp-content/uploads/2021/09/IDWTIJWD-Single-Art.jpeg", spotify: "7xvp7oLcLoVLnEVkOIe7Kt", alt: "I Don't Wanna Talk (I Just Wanna Dance) cover art" }])
    const [results, setResults] = useState([])
    const [token, setToken] = useState([])
    const [query, setQuery] = useState("")
    const [error, setError] = useState("")
    const [track, setTrack] = useState("")
    const [artist, setArtist] = useState("")


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
    // console.log('outside token', token)


    useEffect(() => {
        
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

        const fetchSong = async (query) => {
            try {
                const url =`https://api.spotify.com/v1/search?q=${query}&type=track&offset=0&limit=5`
              const config = {
                method: 'GET',
                url: url,
                headers: { 
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            };
            const { data } = await axios(config)
            console.log(data)
                    // console.log(JSON.stringify(response.data));
                    console.log(data.tracks.items[0].id);     
            const items = data.tracks.items
            const idArray = []
            for(let i = 0; i < items.length; i++){
                idArray.push(items[i].id)
            }
            setResults(idArray)            
            }catch(err) {
                setError(err)
            }
                                  
        }
        const timeoutId = setTimeout(() => {
            fetchSong(query)
          }, 400);
      
        return () => {
            clearTimeout(timeoutId)
        }
        // fetchSong()
          
    }, [ token, query ])

console.log(results)

    const onTrackInputChange = (e) => {
        setTrack(e.target.value)
    }
    const onArtistInputChange = (e) => {
        setArtist(e.target.value)
    }
    
    const onFormSubmit = (e) => {
        e.preventDefault()
        const trackStr = track.replace(" ", "%20")
        const artistStr = artist.replace(" ", "%20")
        const query = `track:${trackStr}+artist:${artistStr}`
        console.log(query)
        setQuery(query)
        setTrack('')
        setArtist('')
    }

    const refreshSongs = (songs) => {
        setSongs(songs)
    }

    console.log(songs)
      return (
          <>
            <h1>Curate your own song list</h1>
            //collapable form to open/hide form
            <form onSubmit={onFormSubmit}>
                <label htmlFor="track">Track name</label>
                <input type="text" id="track" value={track} onChange={onTrackInputChange}/>
                <label htmlFor="artist">Artist name</label>
                <input type="text" id="artist" value={artist} onChange={onArtistInputChange}/>
                <input type="submit"></input>
            </form>
            <Results results={results} songs={songs} setSongs={setSongs} refreshSongs={refreshSongs}/>
            {songs.length !== 0 && 

                <Songs songs={songs}/>

            }
            
          </>
        

//want form in curate page

//takes int id of onFormSubmit useEffect to populate
//when click plus, adds a ssong to the song list that is fed into the songs component


//brings back 5 results
//add to list if correct
                

        
        
      );
    }

//form that adds a song component underneath
//finds spotify id from spotify api



export default Curate;