import React from 'react'
import {Paper,Button} from '@material-ui/core'
import {connect} from 'react-redux'
import {sidenav} from '../redux/action'

const Sidenav = ({togel,sidenav}) => {
    return (
        <div>
            <Paper elevation={3} square={true} style={{position:'fixed',height:'100%',width:'100%',marginLeft:togel ? '60%' : '100%',transition:'0.3s',backgroundColor:'#efefef',zIndex:8,paddingTop:40}}>
                <Button className='klir m-3' ><strong>timeline</strong></Button><br/>
                <Button className='klir m-3' ><strong>profile</strong></Button><br/>
                <Button className='klir m-3' ><strong>setting</strong></Button>
            </Paper>
            <div style={{backgroundColor:togel ? '#66666633' : 'transparent',position:'fixed',height:'100%',width:'100%',zIndex:togel ? 6 : -5,transition:'0.3s'}} onClick={sidenav} />
        </div>
    )
}

const stp = ({reducer}) => {
    return {
        togel: reducer.sidenav
    }
}

export default connect(stp,{sidenav}) (Sidenav)