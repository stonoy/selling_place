import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useRouteError } from 'react-router-dom'
import { customFetch } from '../utilsClient'
import { removeFromActiveChatList, resetChat } from '../feature/chatSlice'
import { resetUser } from '../feature/userSlice'
import { resetProducts } from '../feature/productSlice'

const ErrorPage = () => {
  const navigate = useNavigate()
  const {theChat} = useSelector(state => state.chat)
  const dispatch = useDispatch()

    const delStorage = async () => {
         try {
              dispatch(removeFromActiveChatList(theChat?._id)).then(() => {
                const logoutInside = async () => {
                  await customFetch.post("/logout")
                  localStorage.clear()
                  dispatch(resetChat())
                  dispatch(resetUser())
                  dispatch(resetProducts())
                  navigate("/")
                }
        
                logoutInside()
              })
              
            } catch (error) {
              console.log(error)
              localStorage.clear()
              dispatch(resetChat())
              dispatch(resetUser())
              dispatch(resetProducts())
              navigate("/login")
            }
    }
    
  return (
    <div className='flex gap-2 flex-col p-2 justify-center items-center'>
      <h1>No Matching route</h1>
      <Link to="/" className="block rounded-md p-2 bg-blue-400">Back to home page</Link>
      <h1>OR</h1>
      <div className='flex mt-1 gap-2 flex-col p-2 justify-center items-center'>
        <h1>Something went wrong ! </h1>
        <p>clear your browsing history...</p>
        <button onClick={delStorage} className="block mt-2 rounded-md p-2 bg-blue-400">Continue</button>
    </div>
    </div>
  )
}

export default ErrorPage