import React from 'react'
import {Button} from '@material-ui/core'
import bg2 from '../image/bg2.jpg'
import Login from '../components/login'
import Signup from '../components/signup'
import {ganti} from '../redux/action'
import {connect} from 'react-redux'

const Welcome = ({togel,ganti}) => {
    return (
        <div>
            <div style={{
                zIndex:-2,
                backgroundImage:`url(${bg2})`, 
                backgroundAttachment:'fixed', 
                backgroundPosition:'center', 
                backgroundRepeat:'no-repeat', 
                backgroundSize:'cover', 
                position:'fixed', 
                width:'100%', 
                height:'100%', 
                backgroundColor:'black'}}
            >
                <div style={{backgroundColor:'#11111133',height:'100%'}}/>
            </div>
            <div className='kont' style={{display:'flex',justifyContent:'center',alignItems:'center',zIndex:5,width:'100%',height:'100%'}}>
                <div className='m-5 contain'>
                    <div className='intro1 d-flex align-items-center justify-content-center'>
                        <center>
                            Every Story Matter
                        </center>
                    </div>
                    <div className='intro2' >
                        <div className='mb-4 d-flex justify-content-center'>
                            <div style={{borderBottom:togel === 'login' ? '2px solid #1976d2' : null}}>
                                <Button className='klir' size='large' onClick={()=>ganti('login')}><strong>login</strong></Button>
                            </div>
                            <div style={{borderBottom:togel === 'signup' ? '2px solid #1976d2' : null}}>
                                <Button className='klir' size='large' onClick={()=>ganti('signup')}><strong>signup</strong></Button>
                            </div>
                        </div>
                        {togel === 'login' ? <Login/> : <Signup/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

const stp = ({reducer}) => {
    return {
        togel: reducer.init
    }
}

export default connect(stp,{ganti}) (Welcome)