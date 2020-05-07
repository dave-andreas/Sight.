import React, {useState} from 'react'
import {Paper,TextField,Button,Switch} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import {PostAdd,Public,Lock} from '@material-ui/icons'
import {connect} from 'react-redux'

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#bbbbbb',
        },
        '& label': {
            color: '#bbbbbb'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            color: '#dddddd',
            '& fieldset': {
                borderColor: '#666666',
            },
            '&:hover fieldset': {
                borderColor: '#bbbbbb',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#bb86fc',
            },
        },
    },
})(TextField);

const NewPost = ({dark}) => {
    const [hiden,sethiden] = useState(true)

    return (
        <Paper elevation={3} style={{padding:15,width:'100%',marginBottom:15,maxWidth:600,backgroundColor:dark?'#3c4042':'white'}}>
            {dark?
            <CssTextField color='secondary' variant='outlined' label="How do you feel now ?" multiline rows="3" placeholder="tell us..." fullWidth name='komen' style={{color:'#efefef'}} />
            :
            <TextField color='primary' variant='outlined' label="How do you feel now ?" multiline rows="3" placeholder="tell us..." fullWidth name='komen' />
            }
            <div className='d-flex justify-content-between align-items-center mt-2' style={{marginBottom:-5}}>
                <div className='d-flex align-items-center' style={{marginLeft:-10,color:dark?'#bbbbbb':'grey'}}>
                    <Switch color={dark?'default':'primary'} checked={hiden} onChange={()=>sethiden(!hiden)} />
                    {hiden ?
                    <div className='d-flex align-items-center'>
                        <Public style={{fontSize:13,color:dark?'#bbbbbb':'grey',marginRight:3}} />
                        <span style={{fontSize:13}}>Public</span>
                    </div> 
                    :
                    <div className='d-flex align-items-center'>
                        <Lock style={{fontSize:13,color:dark?'#bbbbbb':'grey',marginRight:3}} />
                        <span style={{fontSize:13}}>Private Only</span>
                    </div>}
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div style={{fontSize:12,color:dark?'#bbbbbb':'grey',marginRight:10}}>0/300</div>
                    <Button className='klir' variant='contained' color='primary' endIcon={<PostAdd/>} style={{background:'linear-gradient(to bottom right, #5851d8 0%, #c13584 100%)'}}>Share</Button>
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

export default connect(stp) (NewPost)