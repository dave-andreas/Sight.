const INITIAL = {
    init: 'login',
    sidenav: false,
    dark: false
}

export default (state = INITIAL, action) => {
    switch (action.type) {
        case 'ganti' : return {...state, init:action.payload}
        case 'sidenav' : return {...state, sidenav:!state.sidenav}
        case 'dark' : return {...state, dark:!state.dark}
        case 'login-success' : return {...state, dark:action.darkmode}
        default : return state
    }
}