const defaultData = {
    user: {},
    login: false
};
const dataSaved = JSON.parse(localStorage.getItem('data')) ?? defaultData;

const initState = {
    user: dataSaved.user,
    login: dataSaved.login
}

const saveData = (data) => {
    const json = JSON.stringify(data);
    localStorage.setItem('data', json);
}

export { initState, saveData }