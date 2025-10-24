import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import SelectBox from './SelectBox';
import MainSearchBox from './MainSearchBox';
import { customFetch, languages } from '../utilsClient';
import { resetUser } from '../feature/userSlice';
import UserDropDown from './UserDropDown';
import MainLogo from './MainLogo';
import SelectLanguages from './SelectLanguages';
import { getProducts, getSuggestions, resetProducts, resetSuggestions } from '../feature/productSlice';
import { removeFromActiveChatList, resetChat } from '../feature/chatSlice';
import UserDetailsModal from './UserDetailsModal';

const Header = () => {
  const {loading, productTypes, locations} = useSelector(state => state.product)
  const {user} = useSelector(state => state.user)
  const {theChat} = useSelector(state => state.chat)
  const [typeIdx, setTypeIdx] = useState(0)
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const intId = useRef(null)
    const [showUserDetails, setShoUserDetails] = useState(false)

    // console.log(loading, productTypes, locations, user, typeIdx, inputValue)

    // console.log(theChat)

  useEffect(() => {
    let inputInt
     
    if (!inputValue){
      inputInt = setInterval(() => {
      
      setTypeIdx(p => {
        if (p === productTypes.length-1){
          return 0
        } else {
          return p+1
        }
      })

      
    }, 2000)
    }

    return () => {
      clearInterval(inputInt)
    }
  }, [productTypes, inputValue])

  const handleLogout = useCallback(() => {
    const logout = async () => {
    try {
      dispatch(removeFromActiveChatList(theChat?._id)).then(() => {
        const logoutInside = async () => {
          await customFetch.post("/logout")
          localStorage.clear()
          dispatch(resetChat())
          dispatch(resetUser())
          dispatch(resetProducts())
          navigate("/login")
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

  logout()
  }, [theChat])

  const handleDebounce = (e) => {
    const text = e.target.value

    setInputValue(text)

    if (!text){
      dispatch(resetSuggestions())
    }

    clearInterval(intId.current)

    intId.current = setTimeout(() => {
      if (text){
        dispatch(getSuggestions(text))
      }
    }, 1000)

  }

  return (
    <nav className='flex flex-col sm:flex-row bg-blue-100 justify-evenly items-center gap-2 p-2'>
        <div className='flex w-full sm:w-1/3 gap-1 items-center'>
          {/* burger */}
          <button onClick={() => setShoUserDetails(true)} className='p-2 sm:hidden text-xl bg-blue-400 rounded-full'>
            <FiAlignJustify />
          </button>
          {/* User Details Modal -> small screen */}
          {
            showUserDetails && <UserDetailsModal setShoUserDetails={setShoUserDetails} handleLogout={handleLogout} user={user}/>
          }
          {/* logo */}
          <MainLogo />
          {/* location */}
          <SelectBox loading={loading} locations={locations} />
        </div>
        <div className='flex w-full sm:w-2/3 gap-1 items-center'>
          {/* search box */}
          <MainSearchBox handleDebounce={handleDebounce} productTypes={productTypes} typeIdx={typeIdx} inputValue={inputValue} />
          {/* language */}
          <SelectLanguages languages={languages}/>
        
        
        {/* login */}
        {
          user ?
          <UserDropDown handleLogout={handleLogout} user={user} />
          :
          <Link to="/login" className='hidden sm:inline-block text-lg text-blue-600 font-bold underline'>Login</Link>
        }
        {/* sell */}
        <Link to="/sell" className="btn btn-outline btn-primary rounded-full">
            <FaPlus />
            Sell
        </Link>
      </div>
    </nav>
  )
}

export default memo(Header)