const INITIAL = {
    login: false,
    loading: false,
    message: '',
}

export default (state=INITIAL,action) => {
    switch (action.type){
        case 'loading' : return {...state, loading:true}
        case 'error' : return {...state, loading:false, message:action.payload}
        case 'login-success' : return {...state, loading:false, message:'login success', login:true}
        case 'logout' : return {...state, ...INITIAL}
        default : return state
    }
}
