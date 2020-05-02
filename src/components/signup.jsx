import React from 'react'
import {Button,TextField} from '@material-ui/core'

const Signup = () => {
    return (
        <div>
            <div className='d-flex flex-column'>
                <TextField className='mb-3' label='Email' />
                <TextField className='mb-3' label='Username' />
                <TextField className='mb-5' label='Password' type='password' />
            </div>
            <div className='d-flex justify-content-center'>
                <Button variant='contained' color='primary' className='klir'>regist</Button>
            </div>
        </div>
    )
}

export default Signup