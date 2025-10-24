import React, { useEffect, useState } from 'react'
import { Footer, Header, SubHeader } from '../components'
import { Outlet, useParams } from 'react-router-dom'
import Queries from '../components/Queries'
import { addOnlineUser, getUser, removeOnlineUser } from '../feature/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { startSocketConnection } from '../utilsClient'
import { resetSuggestions } from '../feature/productSlice'

const HomeLayOut = () => {
  const {provider} = useParams()
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  const [socket, setSocket] = useState(null) // only start a socket connection if user is present

  useEffect(() => {
    let newSocket;

    if (provider === "google"){
      // when user authenticate via google, then user data not comes via login response, we have fetch it differently
        dispatch(getUser()).then((data) => {
          if (data.type === "user/getUser/fulfilled"){
            newSocket = startSocketConnection()
            setSocket(newSocket)
            
            newSocket.emit("online", (data?.payload?.theUser?._id)) // only emit online if user is loggedin

            newSocket.on("userOnline", (userId) => {
              // add to online users
              dispatch(addOnlineUser(userId))
            })

            newSocket.on("userOffline", (userId) => {
              // remove from online users
              dispatch(removeOnlineUser(userId))
            })
          }
        })
      } else if (user) {
        // if user login via email-password
        newSocket = startSocketConnection()
        setSocket(newSocket)

        newSocket.emit("online", (user?._id)) // only emit online if user is loggedin

        newSocket.on("userOnline", (userId) => {
              // add to online users
              dispatch(addOnlineUser(userId))
            })

            newSocket.on("userOffline", (userId) => {
              // remove from online users
              dispatch(removeOnlineUser(userId))
            })
      }

      return () => {
        // reset suggestions when user closes home
        dispatch(resetSuggestions())

        // when logout first reset user slice and update the localstorage then navigate to login page

        if (user || provider === "google") { // if user logged in via google, after first render user is null, bcoz after first render we get the user inside useEffect, and that user stays null until unmounts(logout)
          newSocket?.disconnect()
        }
      }
  }, [])

  return (
    <main>
        <section >
          <Header/>
          <SubHeader />
          <Queries />
        </section>
        <section className='max-w-4xl mx-auto flex-1 min-h-[calc(100vh-200px)]'>
            <Outlet context={{socket}} />
            
        </section>
        <Footer/>
    </main>
  )
}

export default HomeLayOut