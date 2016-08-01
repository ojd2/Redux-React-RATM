// State argument is not application state, only the state
// this is the reducers state:
export default function(state = null, action) {
    console.log("action" + action.type);
    switch (action.type) {
        case 'ALBUM_SELECTED':
            return action.payload;
    }
    return state;
}