import React, {useState}  from 'react';

const Songs = ( {songs} ) => {
    // const [song, setSong] = useState([]);
    // const [song, setSong] = useState([
    //     { title: "Cooped p (with Roddy Ricch)", releaseDate: "12/05/2022", img: "https://www.sputnikmusic.com/images/albums/425934.jpg", spotify: "https://open.spotify.com/embed/track/32vE1nuG8T9c8bhmZdRY6d?theme=0", alt: "Twelve Carat Toothache cover art" }])
    // const renderSongs = () => {
        return (
        //     <div> {
        // song.map(s => (
        <div className="songDiv">
            <div className="songInfo">
                <h2>{songs.title}</h2>
                <p>Released: {songs.releaseDate}</p>
            </div>
            <div className="spotifyEmbed">
                <iframe src={songs.spotify} width="100%" height="80" frameBorder="0"></iframe>
            </div>
            <div className="songImg">
                <img src={songs.img} alt={songs.alt} />
            </div>
        </div>  
        // ))}
        // </div>      
        )
    }

    // return(
    //     <div>
    //         {renderSongs(songs)}
    //     </div>
    // )
//  return (
//         <div>
//          {
//              songs.map(s => (
//             <div className="songDiv">
//     //         <div className="songInfo">
//     //             <h2>{s.title}</h2>
//     //             <p>Released: {s.releaseDate}</p>
//     //         </div>
//     //         <div className="spotifyEmbed">
//     //             <iframe src={s.spotify} width="100%" height="80" frameBorder="0"></iframe>
//     //         </div>
//     //         <div className="songImg">
//     //             <img src={s.img} alt={s.alt} />
//     //         </div>
//             </div>
//              ))
//          }
//      </div>
//  )
        
// }
export default Songs