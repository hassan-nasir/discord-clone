import React from 'react'
import { appSlice, setChannelInfo } from '../../app/features/appSlice'
import {useDispatch} from 'react-redux'
import './SideBarChannel.css'

function SideBarChannel({id,channelName}) {
    const dispatch = useDispatch(appSlice)
    // console.log("SideBArChannel",channelName)
    return (
        <div className="sidebarChannel" onClick={()=>
            dispatch(
                setChannelInfo({
                    channelId:id,
                    channelName:channelName
                })
           )
        }>
            <h4><span className="sidebarChannel_hash">#</span>
                {channelName}
            </h4>
        </div>
    )
}

export default SideBarChannel
