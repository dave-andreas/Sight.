import Axios from 'axios'
import {apiurl} from '../apiurl'

export const ganti = (apa) => {
    return {type:'ganti', payload:apa}
}

export const sidenav = () => {
    // buat munculin sidenav
    return {type:'sidenav'}
}

export const darkmode = () => {
    // merubah dark mode
    return {type:'dark'}
}

export const login = (data) => {
    const {username,password} = data
    return (dispatch) => {
        dispatch({type: 'loading'})
        if (!username || !password) {
            dispatch({type: 'error', payload: 'fill all section please'})
        } else {
            Axios.get(`${apiurl}/user/login?username=${username}&password=${password}`)
            .then(res => {
                if (res.data.length) {
                    localStorage.setItem('uid', res.data[0].id)
                    var x = false
                    if (res.data[0].darkmode === 1) {
                        console.log(1)
                        x = true
                    }
                    dispatch({
                        type: 'login-success',
                        darkmode: x,
                    })
                } else {
                    dispatch({type: 'error', payload: 'cannot find this account'})
                }
            }).catch(err => {
                console.log(err)
                dispatch({type: 'error', payload: 'server error'})
            })
        }
    }
}

export const regis = (data) => {
    const {username,password,email} = data
    return (dispatch) => {
        dispatch({type: 'loading'})
        if (!username || !password || !email) {
            dispatch({type: 'error', payload: 'fill all section please'})
        } else {
            Axios.post(`${apiurl}/user/regis`, data)
            .then(res => {
                dispatch({type: 'error', payload: res.data.message})
                // sudah ada username atau berhasil regisnya dari sini
            }).catch(err => {
                console.log(err)
                dispatch({type: 'error', payload: 'server error'})
            })
        }
    }
}

export const checklogin = () => {
    return (dispatch) => {
        dispatch({type: 'loading'})
        const id = localStorage.getItem('uid')
        if (id) {
            Axios.get(`${apiurl}/user/userinfo/${id}`)
            .then(res => {
                var x = false
                if (res.data.darkmode === 1) {
                    x = true
                }
                dispatch({
                    type: 'login-success',
                    darkmode: x,
                })
            }).catch(err => {
                console.log(err)
                dispatch({type: 'error', payload: 'server error'})
            })
        } else {
            dispatch({type: 'error', payload: null})
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('uid')
        dispatch({type: 'logout'})
    }
}