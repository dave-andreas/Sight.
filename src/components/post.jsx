import React, {useState} from 'react'
import {Paper,Divider,Avatar,IconButton,Menu,MenuItem} from '@material-ui/core'
import {MoreVert,Public,ThumbDown,ThumbUp,Forum} from '@material-ui/icons'
import {connect} from 'react-redux'
import foto from '../image/profile.jpg'

const Post = ({dark}) => {
    const [open,setopen] = useState(null)
    
    const changeopen = (e) => {
        setopen(e.currentTarget)
    }

    const changeclose = () => {
        setopen(null)
    }
    
    return (
        <Paper elevation={3} style={{width:'100%',marginBottom:15,maxWidth:600,padding:'15px 17px 0px 17px',backgroundColor:dark?'#3c4042':'white'}}>

            {/* post header */}
            <div className='d-flex'>
                <Avatar src={foto} alt='profile' />
                <div style={{marginLeft:15}}>
                    <div style={{fontSize:15,color:dark?'#dddddd':'#555555'}}><strong>Story Title</strong></div>
                    <div className='d-flex align-items-center' style={{fontSize:12,color:dark?'#bbbbbb':'grey'}}>
                        <div className='mr-2'>
                            22/09/2019
                        </div>
                        <Public style={{fontSize:13}} />
                    </div>
                </div>
                <IconButton className='ml-auto klir' style={{margin:-5,color:dark?'#bbbbbb':null}} aria-controls="simple-menu" aria-haspopup="true" onClick={changeopen}>
                    <MoreVert style={{fontSize:15}} />
                </IconButton>
                <Menu id="simple-menu" anchorEl={open} keepMounted open={Boolean(open)} onClose={changeclose}>
                    <MenuItem onClick={changeclose}>Edit</MenuItem>
                    <MenuItem onClick={changeclose}>Delate</MenuItem>
                </Menu>
            </div>

            {/* post body */}
            <Divider style={{margin:'10px 0px'}} />
            <div style={{fontSize:15,color:dark?'#dddddd':null}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <Divider style={{margin:'10px 0px 0px 0px'}} />

            {/* post footer */}
            <div className='d-flex'>
                <div>
                    <IconButton className='klir' style={{fontSize:13,color:dark?'#bbbbbb':null}} >
                        <ThumbUp style={{fontSize:18,marginRight:8}} />
                        <span>13</span>
                    </IconButton>
                </div>
                <div>
                    <IconButton className='klir' style={{fontSize:13,color:dark?'#bbbbbb':null}} >
                        <ThumbDown style={{fontSize:18,marginRight:8}} />
                        <span>4</span>
                    </IconButton>
                </div>
                <div className='ml-auto'>
                    <IconButton className='klir' style={{fontSize:13,color:dark?'#bbbbbb':null}} >
                        <Forum style={{fontSize:18,marginRight:8}} />
                        <span>2</span>
                    </IconButton>
                </div>
            </div>
        </Paper>
    )
}

const stp = ({reducer}) => {
    return {
        dark: reducer.dark
    }
}

export default connect(stp) (Post)