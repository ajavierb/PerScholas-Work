import React, { useReducer } from "react";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";

const reducer = (state, action) => {
    case INCREMENT_COUNT:
        return
}


function CounterPage ( {
    const [state, dispatch] = useReducer(reducer,{
        count:0
    
    })
});
const increment = () => {
    dispatch({
        type: INCREMENT_COUNT
    })
};
const decrement = () => {
    dispatch({
        type: DECREMENT_COUNT
    })
};

return(
    <div>

    </div>
)








