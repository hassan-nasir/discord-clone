import React,{useEffect} from 'react';
import './App.css';
import Chat from './Containers/Chat/Chat';
import SideBar from './Containers/SideBar/SideBar';
import {useSelector,useDispatch} from 'react-redux'
import {selectUser} from './app/features/userSlice'
import Login from './Containers/Login/Login';
import { auth } from './Config/Firebase';
import {login,logout} from './app/features/userSlice'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userState)=>{
      if (userState) {
        dispatch(
          login({
            uid :userState.uid,
            photo:userState.photoURL,
            displayName:userState.displayName,
            email:userState.email
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])
  return (
    <div className="app">
      {user ? 
      <>
        <SideBar/>
        <Chat/>
      </> :
      <Login/>}
    
    </div>
  );
}

export default App;
