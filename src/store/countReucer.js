export const initailState ={ count: 5};

const countReducer = (state = initailState, action) => {
    switch(action.type) {
        case ("increase" ): 
        return {...state, count: state.count + action.payload}

        case ("decrease" ):
        return {...state, count: state.count - action.payload}
        
        default: state;
    }


    // if(action.type === "increase"){
    //     console.log("increase")
    //     return {...state, count: state.count + action.payload}

    // }

    // if(action.type === "decrease"){
    //     return {...state, count: state.count - action.payload}

    // }
    // console.log(action)

    return state;
}

export default countReducer;