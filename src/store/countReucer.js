export const initailState ={ count: 5, showCount: false};

const countReducer = (state = initailState, action) => {
    switch(action.type) {
        case ("increase" ): 
        return {...state, count: state.count + action.payload}

        case ("decrease" ):
        return {...state, count: state.count - action.payload}

        case ("toggleCounter"):
            return {...state, showCount: !state.showCount}
        
        default: state;
    }

    return state;
}

export default countReducer;