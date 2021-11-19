import { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from '../Reducer/reducer';

function AuthProvider(props) {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {props.children}
        </Context.Provider>
    )
}

export default AuthProvider;