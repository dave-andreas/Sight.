const INITIAL = {
    login: false,
    loading: false,
    id: '',
    message: '',
}

export default (state=INITIAL,action) => {
    switch (action.type){
        case 'loading' : return {...state, loading:true}
        case 'error' : return {...state, loading:false, message:action.payload}
        case 'login-success' : return {...state, loading:false, message:'login success', id:action.payload, login:true}
        default : return state
    }
}
