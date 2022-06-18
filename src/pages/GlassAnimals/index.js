import React, {useState} from 'react';
// import { Songs, ArtistInfo } from './../../components'
import { Songs, ArtistInfo } from './../../components'
// import {default as ArtistInfo} from '../../components/ArtistInfo';

const GlassAnimals = () => {
    const [songs, setSongs] = useState([
        { title: "Cooped Up (with Roddy Ricch)", releaseDate: "12/05/2022", img: "https://www.sputnikmusic.com/images/albums/425934.jpg", spotify: "https://open.spotify.com/embed/track/32vE1nuG8T9c8bhmZdRY6d?theme=0", alt: "Twelve Carat Toothache cover art" },
        { title: "Saint-Tropez", releaseDate: "06/09/2019", img: "https://bloximages.newyork1.vip.townnews.com/gonzagabulletin.com/content/tncms/assets/v3/editorial/a/6a/a6a8e4cc-d4fd-11e9-ac77-7f193561e953/5d79a1cf31fb4.image.jpg?resize=1200%2C1200", spotify: "https://open.spotify.com/embed/track/05mDaV9Vb3wrzjF6OPZnhq?theme=0", alt: "Hollywood's Bleeding cover art" },
        { title: "Spoil My Night (feat. Swae Lee)", releaseDate: "27/04/2019", img: "https://upload.wikimedia.org/wikipedia/en/c/c1/Beerbongs_%26_Bentleys_by_Post_Malone.png", spotify: "https://open.spotify.com/embed/track/5VuxWXbt7XENQCtE9TzpTv?theme=0", alt: "beerbongs & bentleys cover art" }]
    )
    
        // const renderSongs = () => songs.map((song, i) => <Songs key={i} song={song}
        //     />)


    return (
        <>
            <h1>Glass Animals</h1>
            <ArtistInfo />
            {/* {renderSongs()} */}
            <Songs songs={songs}/>
        </>
    )
}

export default GlassAnimals;