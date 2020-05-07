import React, {useState} from 'react'
import {Paper,Button,IconButton,Menu,MenuItem,InputBase,Switch} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Search from '@material-ui/icons/Search'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {sidenav,darkmode} from '../redux/action'

const Header = ({dark,darkmode,sidenav}) => {
    const [open,setopen] = useState(null)
    
    const changeopen = (e) => {
        setopen(e.currentTarget)
    }
    
    const changeclose = () => {
        setopen(null)
    }

    const changeswitch = (e) => {
        darkmode()
    }
    return (
        <div>
            <Paper elevation={3} square={true} className='d-flex justify-content-between' style={{backgroundColor:dark?'#26235d':'#5851d8',color:'#efefef',padding:5,position:'fixed',width:'100%',zIndex:3}}>
                <Link to={'/'} className='mx-3' style={{textDecoration:'none',color:'#efefef'}}>
                    <div className='logo' style={{fontSize:23}}>Sight.</div>
                </Link>
                <div className='d-flex align-items-center ml-2 mr-auto pr-2 pl-3' style={{borderRadius:5,backgroundColor:'#efefef66'}}>
                    <InputBase style={{color:'#efefef',fontSize:15}} />
                    <div className='ml-3 d-flex align-items-center'>
                        <Search style={{fontSize:20}} />
                    </div>
                </div>
                <div className='mr-3 menu1'>
                    <Switch color='default' onChange={changeswitch} />
                    <Button className='klir ml-2' color='inherit' style={{float:'left',width:100}}><strong>timeline</strong></Button>
                    <Button className='klir ml-2' color='inherit'><strong>profile</strong></Button>
                    <Button className='klir ml-2' color='inherit'><strong>setting</strong></Button>
                </div>
                <div className='mx-3 menu2'>
                    <IconButton className='klir' style={{margin:-7}} aria-controls="simple-menu" aria-haspopup="true" onClick={changeopen} >
                        <MenuIcon style={{color:'#efefef'}} />
                    </IconButton>
                    <Menu id="simple-menu" anchorEl={open} keepMounted open={Boolean(open)} onClose={changeclose}>
                        <MenuItem onClick={changeclose}>Timeline</MenuItem>
                        <MenuItem onClick={changeclose}>Profile</MenuItem>
                        <MenuItem onClick={changeclose}>Setting</MenuItem>
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

export default connect(stp,{sidenav,darkmode}) (Header)