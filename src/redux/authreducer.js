const INITIAL = {
    login: false,
    loading: false,
    id: '',
    message: '',
}

export default (state=INITIAL,action) => {
    switch (action.type){
        case 'login-loading' : return {...state, loading:true}
        case 'login-error' : return {...state, loading:false, message:action.payload}
        case 'login-success' : return {...state, loading:false, message:'login success', id:action.payload}
        default : return state
    }
}
