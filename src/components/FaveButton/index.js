import React, { useState } from 'react'

const FaveButton = () => {
    const [ faved, setFaved ] = useState(false);
    const handleFave = e => {
        e.stopPropagation()
        setFaved(!faved)
    }

    return(
        <span role="switch" onClick={handleFave} style={{fontSize: "40px" }}>{ faved ? "❤️" : "🖤"}</span>
    )
}

export default FaveButton;