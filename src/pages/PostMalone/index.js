import React, {useState} from 'react';
import { Songs, ArtistInfo } from './../../components'

const PostMalone = () => {
    const [songs, setSongs] = useState([
        { title: "Cooped Up (with Roddy Ricch)", releaseDate: "2022", img: "https://www.sputnikmusic.com/images/albums/425934.jpg", spotify: "32vE1nuG8T9c8bhmZdRY6d", alt: "Twelve Carat Toothache cover art" },
        { title: "Saint-Tropez", releaseDate: "2019", img: "https://bloximages.newyork1.vip.townnews.com/gonzagabulletin.com/content/tncms/assets/v3/editorial/a/6a/a6a8e4cc-d4fd-11e9-ac77-7f193561e953/5d79a1cf31fb4.image.jpg?resize=1200%2C1200", spotify: "05mDaV9Vb3wrzjF6OPZnhq", alt: "Hollywood's Bleeding cover art" },
        { title: "Spoil My Night (feat. Swae Lee)", releaseDate: "2019", img: "https://upload.wikimedia.org/wikipedia/en/c/c1/Beerbongs_%26_Bentleys_by_Post_Malone.png", spotify: "5VuxWXbt7XENQCtE9TzpTv", alt: "beerbongs & bentleys cover art" }]
    )
    const [info, setInfo] = useState(
        {name: "Post Malone", genre: "Hip-Hop/Rap", albums: 4}
    )
    
    return (
        <>
            <ArtistInfo artist={info}/>
            <Songs songs={songs}/>
        </>
    )
}

export default PostMalone;