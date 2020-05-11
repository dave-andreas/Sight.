import React, {useEffect} from 'react'
import Header from '../components/header'
import foto from '../image/profile.jpg'
import {connect} from 'react-redux'
import {Paper,TextField,Button} from '@material-ui/core'
import {Save} from '@material-ui/icons'

const Setting = ({dark}) => {

    useEffect(() => {
        // var x = 'y'
    },[])

    return (
        <div>
            <Header/>
            <div style={{paddingTop:43,paddingBottom:30}}>
                <div className='d-flex justify-content-center pt-4'>
                    <div className='d-flex align-items-center px-4' style={{color:dark?'#efefef':'#555555',maxWidth:800,width:'100%',textAlign:'center'}}>
                        <div className='flex-grow-1' style={{border:'solid 1px',minWidth:80}} />
                        <div className='mx-2 logo' style={{border:'solid 0px'}}><h3>Set Your Profile</h3></div>
                        <div className='flex-grow-1' style={{border:'solid 1px',minWidth:80}} />
                    </div>
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <Paper elevation={4} style={{padding:5,borderRadius:'100%',marginBottom:15}}>
                        <img src={foto} style={{width:130,height:130,borderRadius:'100%'}} alt={'profile pic'} />
                    </Paper>
                </div>
                <div className='d-flex flex-column align-items-center px-3'>
                    <Paper className='d-flex flex-column align-items-center pt-2' elevation={3} style={{width:'100%',maxWidth:800}}>
                        <div style={{width:'98%',maxWidth:800}}>
                            <div className='form1 px-1'>
                                <TextField label='Name' variant='outlined' size='small' fullWidth defaultValue='David Roynaldo Andreas' />
                            </div>
                            <div className='form1 px-1'>
                                <TextField label='Username' variant='outlined' size='small' fullWidth />
                            </div>
                        </div>
                        <div style={{width:'98%',maxWidth:800}}>
                            <div className='form1 px-1'>
                                <TextField label='Birth' variant='outlined' size='small' fullWidth />
                            </div>
                            <div className='form1 px-1'>
                                <TextField label='Location' variant='outlined' size='small' fullWidth />
                            </div>
                        </div>
                        <div style={{width:'98%',maxWidth:800}}>
                            <div className='form2 px-1'><TextField label='Your Headline' variant='outlined' size='small' fullWidth multiline /></div>
                            <div className='form2 px-1'><TextField label='Cover Story' variant='outlined' size='small' fullWidth multiline rows={5} /></div>
                        </div>
                        <div style={{width:'98%',maxWidth:800}}>
                            <div className='form2 px-1'>
                                <TextField label='Cover Color 1' variant='outlined' size='small' />
                            </div>
                            <div className='form2 px-1'>
                                <TextField label='Cover Color 2' variant='outlined' size='small' />
                            </div>
                        </div>
                        <div className='my-4 px-1' style={{width:'98%',maxWidth:800}}>
                            <Button className='klir' variant='contained' color='primary' fullWidth endIcon={<Save/>} style={{background:'linear-gradient(to bottom right, #5851d8 0%, #c13584 100%)'}}>save</Button>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    )
}

const stp = ({reducer}) => {
    return {
        dark: reducer.dark
    }
}

export default connect(stp) (Setting)