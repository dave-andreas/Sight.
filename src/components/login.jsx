import React, {useState} from 'react'
import {Button,TextField} from '@material-ui/core'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../redux/action'

const Login = ({login,message}) => {
    
    const [data,setdata] = useState({})

    const change = (e) => {
        const {name,value} = e.target
        setdata({...data, [name]:value})
    }

    return (
        <div>
            <div className='d-flex flex-column'>
                <TextField className='mb-3' label='Username' onChange={change} name='username' />
                <TextField className='mb-5' label='Password' type='password' onChange={change} name='password' />
            </div>
            <div className='d-flex justify-content-center'>
                <Button variant='contained' color='primary' className='klir' 
                // component={Link} to={'/user/profile'} 
                style={{textDecoration:'none',color:'white'}}
                onClick={()=>login(data)}>
                    get in
                </Button>
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

export default connect(stp,{login}) (Login)