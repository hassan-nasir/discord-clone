import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

function ChatHeader({channelId,channelName}) {
    return (
        <div className="chatHeader">
            <div className="chatHeader_left">
                <h3>
                    <span className="chatHeader_hash">#</span>
                    {channelName}
                </h3>
            </div>
            <div className="chatHeader_right">
                <NotificationsIcon/>
                <EditLocationIcon/>
                <PeopleAltRoundedIcon/>
                <div className="chatHeader_search">
                    <input placeholder="Search"/>
                    <SearchRoundedIcon/>
                </div>
                <SendRoundedIcon/>
                <HelpRoundedIcon/>
            </div>
        </div>
    )
}

export default ChatHeader;
