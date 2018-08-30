export default function(state = [], action){
    switch (action.type){
        case "MODAL_OPEN":
            state = action.payload;
            break;
        
        case "MODAL_CLOSE":
            state = action.payload;
            break;

        default:
            state = false;
            break;
    }
    return state;
}