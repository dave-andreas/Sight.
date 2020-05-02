import React from 'react'
import {Button,TextField} from '@material-ui/core'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div className='d-flex flex-column'>
                <TextField className='mb-3' label='Username' />
                <TextField className='mb-5' label='Password' type='password' />
            </div>
            <div className='d-flex justify-content-center'>
                <Button variant='contained' color='primary' className='klir' component={Link} to={'/user/profile'} style={{textDecoration:'none',color:'white'}}>get in</Button>
            </div>
        </div>
    )
}

export default Login