import React, {useEffect,useState} from 'react'
import Header from '../components/header'
import foto from '../image/profile.jpg'
import {Paper,Divider} from '@material-ui/core'
import NewPost from '../components/newpost'
import Post from '../components/post'
import {connect} from 'react-redux'
import Axios from 'axios'
import {apiurl} from '../apiurl'
import {Redirect} from 'react-router-dom'

const Profile = ({login,loading}) => {

    const [info,setinfo] = useState({})

    useEffect(() => {
        Axios.get(`${apiurl}/user/userinfo/${localStorage.getItem('uid')}`)
        .then(res => {
            setinfo(res.data)
        }).catch(err => {
            console.log(err)
        })
    })

    if (!localStorage.getItem('uid')) {
        return <Redirect to={'/'} />
    }

    return (
        <div>
            <Header/>
            <div style={{paddingTop:43,paddingBottom:30}}>

                <div className='d-flex align-items-center flex-column px-5' style={{background:'linear-gradient(to bottom, #c13584cc 0%, #ffdc80cc 100%)'}}>
                    <div className='d-flex align-items-center px-4' style={{fontSize:50,color:'white',maxWidth:720,width:'100%'}}>
                        <div className='flex-grow-1' style={{width:'100%',border:'solid 1px',marginTop:-15}} />
                        <div className='mx-2'>"</div>
                        <div className='flex-grow-1' style={{width:'100%',border:'solid 1px',marginTop:-15}} />
                    </div>
                    <div style={{maxWidth:720,textAlign:'center',marginBottom:70,marginTop:-15,color:'white',fontSize:13}} >
                        {info.quote}
                    </div>
                </div>

                <div className='d-flex justify-content-center profcon' >
                    {/* supaya child bisa float */}
                    <div style={{width:'100%',maxWidth:900,marginTop:-40}}>

                        {/* info */}
                        <div className='info d-flex flex-column align-items-center mb-3'>
                            <Paper elevation={4} style={{padding:5,borderRadius:'100%',marginBottom:15}}>
                                <img src={foto} style={{width:130,height:130,borderRadius:'100%'}} alt={'profile pic'} />
                            </Paper>
                            <Paper elevation={4} style={{textAlign:'center',padding:10,minWidth:170,width:'100%',maxWidth:400}}>
                                <div style={{fontSize:20,color:'#555555',marginBottom:5}}>
                                    <strong>{info.name ? info.name : '-'}</strong>
                                </div>
                                <Divider style={{marginBottom:10}} />
                                <div style={{fontSize:13}}>Birth : {info.lahir ? info.lahir : '-'}</div>
                                <div style={{fontSize:13,marginBottom:20}}>Location : {info.domisili ? info.domisili : '-'}</div>
                                <div style={{fontSize:13}}>Headline :</div>
                                <div style={{fontSize:13,color:'#555555',marginBottom:10}}>
                                    <strong>{info.headline ? info.headline : '-'}</strong>
                                </div>
                            </Paper>
                        </div>

                        {/* feed */}
                        <div className='feed d-flex flex-column align-items-center'>
                            <NewPost/>
                            <Post/>
                            <Post/>
                            <Post/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const stp = ({authreducer}) => {
    return {
        login: authreducer.login,
        loading: authreducer.Loading
    }
}

export default connect(stp) (Profile)