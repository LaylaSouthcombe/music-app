const initialState = {
    songs: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "ADDSONG":
            return {songs: state.songs.push(action.payload)}
        default:
            return initialState;
    }
}

export default reducer;