import { initState, saveData } from './constants';

function reducer(state, action) {
    switch(action.type) {
        case 'set_user':
            const newState_1 = {
                ...state,
                user: action.payload
            };
            saveData(newState_1);
            return newState_1;
        case 'remove_user':
            const newState_2 = {
                ...state,
                user: {}
            };
            saveData(newState_2);
            return newState_2;
        case 'set_login':
            const newState_3 = {
                ...state,
                login: action.payload
            };
            saveData(newState_3);
            return newState_3;
        case 'set_logout':
            const newState_4 = {
                ...state,
                login: action.payload
            };
            saveData(newState_4);
            return newState_4;
        default:
            throw new Error('Invalid action!');
    }
}

export { initState };
export default reducer;