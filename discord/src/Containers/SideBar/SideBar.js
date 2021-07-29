import React, { useState,useEffect } from 'react'
import './SideBar.css'
import SideBarChannel from '../../Components/SideBarChannel/SideBarChannel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import CallIcon from '@material-ui/icons/Call'
import InfoIcon from '@material-ui/icons/Info';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import {Avatar} from '@material-ui/core'
import MicIcon from '@material-ui/icons/Mic'
import HeadsetIcon from '@material-ui/icons/Headset'
import SettingsIcon from '@material-ui/icons/Settings'
import {useSelector} from 'react-redux'
import {selectUser} from '../../app/features/userSlice'
import db, { auth } from '../../Config/Firebase';

function SideBar() {
    const user = useSelector(selectUser);
    const [channelList,setChannel]=useState([])
    useEffect(() => {
        db.collection("channels").onSnapshot((snapshot)=>{
            setChannel(
                snapshot.docs.map(channel=>({
                    id:channel.id,
                    channel:channel.data()
                }))
            )
        })
    }, [])
    const addChannel = () => {
        const channelName = prompt("Enter Channel Name")
        // console.log("CHANNELList",channelList)

        if (channelName) {
            db.collection("channels").add({
                channelName:channelName
            })
        }
    }
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <a href="https://discord.com/login"><img 
                    src="https://www.freepnglogos.com/uploads/discord-logo-png/playerunknown-battlegrounds-bgparty-15.png"
                    alt="Discord Logo" 
                    style={{height: "55px",width: "210px"}}
                /></a>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar_channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar_headers">
                        <ExpandMoreIcon/>
                        <h4>Add Channel</h4>
                    </div>
                    <AddIcon 
                    onClick={addChannel}
                    className="sidebar_addChannel"/>
                </div>
                <div className="sidebar_channelsList">
                    {channelList.map((channel,id)=>{
                        // console.log("CHAN",channel)
                        return(
                        <SideBarChannel
                         key={id} 
                         id={id}
                         channelName={channel.channel.channelName}
                         />)
                    })}
                </div>
            </div>
            <div className="sidebar_voice">
                <SignalCellularAltIcon
                    className="sidebar_voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar_voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar_voiceIcons">
                    <InfoIcon/>
                    <CallIcon/>
                </div>
            </div>
            <div className="sidebar_profile">
                <Avatar onClick={()=>auth.signOut()} src={user.photo} style={{cursor:"pointer"}} />
                <div className="sidebar_profileInfo">
                    <h4>{user.displayName}</h4>
                    <p>#{user.uid.substring(0,5)}</p>
                </div>
                <div className="sidebar_profileIcons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>
        </div>
    )
}

export default SideBar
