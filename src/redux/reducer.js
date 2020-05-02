const INITIAL = {
    init: 'login',
    sidenav: false
}

export default (state = INITIAL, action) => {
    switch (action.type) {
        case 'ganti' : return {...state, init:action.payload}
        case 'sidenav' : return {...state, sidenav:!state.sidenav}
        default : return state
    }
}