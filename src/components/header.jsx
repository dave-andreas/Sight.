import React, {useState} from 'react'
import {Paper,Button,IconButton,Menu,MenuItem,InputBase,Switch} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {PowerSettingsNew,Settings,AccountCircle,LineWeight} from '@material-ui/icons'
import Search from '@material-ui/icons/Search'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {darkmode,logout} from '../redux/action'
import Axios from 'axios'
import {apiurl} from '../apiurl'

const Header = ({dark,darkmode,logout}) => {
    const [open,setopen] = useState(null)
    
    const changeopen = (e) => {
        setopen(e.currentTarget)
    }
    
    const changeclose = () => {
        setopen(null)
    }

    const changeswitch = (e) => {
        if (dark) {
            Axios.post(`${apiurl}/user/changemode?dark=0&id=${localStorage.getItem('uid')}`)
            darkmode()
        } else {
            Axios.post(`${apiurl}/user/changemode?dark=1&id=${localStorage.getItem('uid')}`)
            darkmode()
        }
    }
    return (
        <div>
            <Paper elevation={3} square={true} className='d-flex justify-content-between' style={{backgroundColor:dark?'#26235d':'#5851d8',color:'#efefef',padding:5,position:'fixed',width:'100%',zIndex:3}}>
                <div className='logo mx-3' style={{fontSize:23,color:'#efefef'}}>Sight.</div>
                <div className='d-flex align-items-center ml-2 mr-auto pr-2 pl-3' style={{borderRadius:5,backgroundColor:'#efefef66'}}>
                    <InputBase style={{color:'#efefef',fontSize:15}} />
                    <div className='ml-3 d-flex align-items-center'>
                        <Search style={{fontSize:20}} />
                    </div>
                </div>
                <div className='mr-3 menu1'>
                    <Switch color='default' onChange={changeswitch} checked={dark} />
                    <Button className='klir ml-2' color='inherit' ><strong><LineWeight/></strong></Button>
                    <Button className='klir ml-2' color='inherit' component={Link} to={'/user/profile'} style={{textDecoration:'none',color:'white'}}><strong><AccountCircle/></strong></Button>
                    <Button className='klir ml-2' color='inherit' component={Link} to={'/user/setting'} style={{textDecoration:'none',color:'white'}}><strong><Settings/></strong></Button>
                    <Button className='klir ml-2' color='inherit' style={{textDecoration:'none',color:'white'}} onClick={logout}><strong><PowerSettingsNew/></strong></Button>
                </div>
                <div className='mx-3 menu2'>
                    <IconButton className='klir' style={{margin:-7}} aria-controls="simple-menu" aria-haspopup="true" onClick={changeopen} >
                        <MenuIcon style={{color:'#efefef'}} />
                    </IconButton>
                    <Menu id="simple-menu" anchorEl={open} keepMounted open={Boolean(open)} onClose={changeclose}>
                        <MenuItem onClick={changeclose}><LineWeight className='mr-3'/> Timeline</MenuItem>
                        <MenuItem onClick={changeclose} component={Link} to={'/user/profile'} style={{textDecoration:'none'}}><AccountCircle className='mr-3'/> Profile</MenuItem>
                        <MenuItem onClick={changeclose} component={Link} to={'/user/setting'} style={{textDecoration:'none'}}><Settings className='mr-3'/> Setting</MenuItem>
                        <MenuItem onClick={changeclose} onClick={logout}><PowerSettingsNew className='mr-3'/> Logout</MenuItem>
                    </Menu>
                </div>
            </Paper>
        </div>
    )
}

const stp = ({reducer}) => {
    return {
        dark: reducer.dark
    }
}

export default connect(stp,{darkmode,logout}) (Header)