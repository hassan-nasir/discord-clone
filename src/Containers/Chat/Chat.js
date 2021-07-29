import React,{useState,useEffect} from 'react'
import ChatHeader from '../../Components/ChatHeader/ChatHeader'
import './Chat.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from '../../Components/Message/Message';
import {useSelector} from 'react-redux'
import { selectUser } from '../../app/features/userSlice';
import { selectChannelId, selectChannelName } from '../../app/features/appSlice';
import db from '../../Config/Firebase';
import firebase from 'firebase'

function Chat() {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])

    console.log("ChannelId",channelId,channelName)
    
    useEffect(() => {
        if (channelName) {
           db.collection("channels")
            .doc(channelName)
            .collection("messages")
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot)=> {return(
            setMessages(snapshot.docs.map((doc)=>{return(doc.data())})))})
        }
    }, [channelName])

    const buttonClicked = (e) => {
        e.preventDefault();
        // console.log("message",e)
        console.log("messageState",messages)

        db.collection("channels")
        .doc(channelName)
        .collection("messages")
        .add({
            message: input,
            user:user,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName}/>
            <div className="chat_messages">
                {messages.map((message,id)=>{
                    return(
                    <Message 
                    user={message.user}
                    message={message.message}
                    timestamp={message.timestamp}
                    // key={id}
                />
                )})}
            </div>

            <div className="chat_input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input 
                        value={input}
                        onChange={e=> setInput(e.target.value)}
                        placeholder={`Message #${channelName}`}
                        disabled={!channelName}
                        />
                    <button 
                        type="submit"
                        className="chatInput_btn" 
                        disabled={!channelName}
                        onClick={buttonClicked}
                        >send
                    </button>
                </form>
                <div className="chat_inputIcons">
                    <CardGiftcardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
