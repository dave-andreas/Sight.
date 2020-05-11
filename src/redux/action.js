import Axios from 'axios'
import {apiurl} from '../apiurl'

export const ganti = (apa) => {
    return {type:'ganti', payload:apa}
}

export const sidenav = () => {
    return {type:'sidenav'}
}

export const darkmode = () => {
    return {type:'dark'}
}

export const login = (data) => {
    const {username,password} = data
    return (dispatch) => {
        dispatch({type: 'login-loading'})
        if (!username || !password) {
            dispatch({type: 'login-error', payload: 'fill all section please'})
        } else {
            Axios.get(`${apiurl}/user/login?username=${username}&password=${password}`)
            .then(res => {
                if (res.data.length) {
                    dispatch({type: 'login-success', payload: res.data[0].id})
                } else {
                    dispatch({type: 'login-error', payload: 'cannot find this account'})
                }
            }).catch(err => {
                console.log(err)
                dispatch({type: 'login-error', payload: 'server error'})
            })
        }
    }
}

export const regis = (data) => {
    const {username,password,email} = data
    return (dispatch) => {
        dispatch({type: 'login-loading'})
        if (!username || !password || !email) {
            dispatch({type: 'login-error', payload: 'fill all section please'})
        } else {
            console.log('sudah lengkap')
            Axios.post(`${apiurl}/user/regis`, data)
            .then(res => {
                if (res.data) {
                    dispatch({type: 'login-error', payload: res.data.message})
                }
            }).catch(err => {
                console.log(err)
                dispatch({type: 'login-error', payload: 'server error'})
            })
        }
    }
}