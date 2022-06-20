import React, {useState} from 'react';
import { Songs, ArtistInfo } from './../../components'

const GlassAnimals = () => {
    const [songs, setSongs] = useState([
        { title: "I Don't Wanna Talk (I Just Wanna Dance)", releaseDate: "2022", img: "https://dailyutahchronicle.com/wp-content/uploads/2021/09/IDWTIJWD-Single-Art.jpeg", spotify: "7xvp7oLcLoVLnEVkOIe7Kt", alt: "I Don't Wanna Talk (I Just Wanna Dance) cover art" },
        { title: "It's All So Incredibly Loud", releaseDate: "2020", img: "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png", spotify: "7jbDqjzkpjfUytnqG6zxO3", alt: "Dreamland cover art" },
        { title: "Take A Slice", releaseDate: "2016", img: "https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg", spotify: "37adYGaYaAWTGhBaOzX4Fh", alt: "How To Be A Human Being cover art" }]
    )

    
    const [info, setInfo] = useState(
        {name: "Glass Animals", genre: "Alternative/Indie", albums: 3}
    )
    return (
        <>
            <ArtistInfo artist={info}/>
            <Songs songs={songs}/>
        </>
    )
}

export default GlassAnimals;