function setUser(data) {
    return {
        type: 'set_user',
        payload: data
    }
}

function removeUser(data) {
    return {
        type: 'remove_user',
        payload: data
    }
}

function setLogin(data) {
    return { 
        type: 'set_login',
        payload: data
    }
}

function setLogout(data) {
    return { 
        type: 'set_logout',
        payload: data
    }
}

export { setUser, removeUser, setLogin, setLogout };