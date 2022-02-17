let initialvalues={ a:[]}

function valueReducer(state = initialvalues, action){
    switch(action.type){
        case "add":
            return {...state, a:[...state.a, action.value]};
        case "remove":
            return {...state, a:action.value};
        default:
            return state;
    }
}

export default valueReducer;