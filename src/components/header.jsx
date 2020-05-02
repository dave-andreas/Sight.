import React from 'react'
import {Paper,Button,IconButton} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import Sidenav from './sidenav'
import {connect} from 'react-redux'
import {sidenav} from '../redux/action'

const Header = ({sidenav}) => {
    return (
        <div>
            <Paper elevation={3} square={true} className='d-flex justify-content-between' style={{backgroundColor:'#6886c5',color:'#efefef',padding:5,position:'fixed',width:'100%'}}>
                <Link to={'/'} style={{textDecoration:'none',color:'#efefef'}}>
                    <div className='logo ml-3' style={{fontSize:23}}>Sight.</div>
                </Link>
                <div className='mr-3 menu1'>
                    <Button className='klir ml-2' color='inherit' style={{float:'left',width:100}}><strong>timeline</strong></Button>
                    <Button className='klir ml-2' color='inherit'><strong>profile</strong></Button>
                    <Button className='klir ml-2' color='inherit'><strong>setting</strong></Button>
                </div>
                <div className='mr-3 menu2'>
                    <IconButton className='klir' style={{margin:-7}} onClick={sidenav}>
                        <Menu style={{color:'#efefef'}} />
                    </IconButton>
                </div>
            </Paper>
            <Sidenav/>
        </div>
    )
}

export default connect(null,{sidenav}) (Header)