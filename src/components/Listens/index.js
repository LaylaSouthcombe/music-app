import React, {useState} from 'react'

//use redux so listens remain
const Listens = () => {
    const [listens, setListens] = useState(0)
    const increaseListens = () => {setListens(listens => listens + 1)}
    return (
        <>
            <p>Listens: {listens}</p>
            <button onClick={increaseListens}>Up</button>
        </>
        
    )
}

export default Listens;
