import React, {useState} from 'react'
import {Button,TextField} from '@material-ui/core'
import {connect} from 'react-redux'
import {regis} from '../redux/action'

const Signup = ({message,regis}) => {

    const [data,setdata] = useState({})

    const change = (e) => {
        const {name,value} = e.target
        setdata({...data, [name]:value})
    }

    return (
        <div>
            <div className='d-flex flex-column'>
                <TextField className='mb-3' name='email' onChange={change} label='Email' />
                <TextField className='mb-3' name='username' onChange={change} label='Username' />
                <TextField className='mb-5' name='password' onChange={change} label='Password' type='password' />
            </div>
            <div className='d-flex justify-content-center'>
                <Button variant='contained' color='primary' className='klir' onClick={()=>regis(data)}>regist</Button>
            </div>
            <div className='d-flex justify-content-center' style={{color:'red'}}>{message}</div>
        </div>
    )
}

const stp = ({authreducer}) => {
    return {
        message: authreducer.message
    }
}

export default connect(stp, {regis}) (Signup)