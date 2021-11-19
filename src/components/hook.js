import Context from "../Context/Context";
import { useContext } from 'react';

function useDataContext() {
    const { state, dispatch } = useContext(Context);

    return { state, dispatch }
}

export { useDataContext };