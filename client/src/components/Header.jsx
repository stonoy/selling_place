import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import SelectBox from './SelectBox';
import MainSearchBox from './MainSearchBox';
import { customFetch, languages } from '../utilsClient';
import { resetUser } from '../feature/userSlice';
import UserDropDown from './UserDropDown';
import MainLogo from './MainLogo';
import SelectLanguages from './SelectLanguages';
import { getProducts, getSuggestions, resetProducts, resetSuggestions } from '../feature/productSlice';
import { resetChat } from '../feature/chatSlice';

const Header = () => {
  const {loading, productTypes, locations} = useSelector(state => state.product)
  const {user} = useSelector(state => state.user)
  const [typeIdx, setTypeIdx] = useState(0)
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const intId = useRef(null)

    // console.log(loading, productTypes, locations, user, typeIdx, inputValue)

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
      await customFetch.post("/logout")
      localStorage.clear()
      dispatch(resetChat())
      dispatch(resetUser())
      dispatch(resetProducts())
      navigate("/login")
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
  }, [])

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
    <nav className='flex bg-blue-100 justify-evenly items-center gap-2 p-2'>
        {/* logo */}
        <MainLogo />
        {/* location */}
        <SelectBox loading={loading} locations={locations} />
        {/* search box */}
        <MainSearchBox handleDebounce={handleDebounce} productTypes={productTypes} typeIdx={typeIdx} inputValue={inputValue} />
        {/* language */}
        <SelectLanguages languages={languages}/>
        {/* love */}
        {/* login */}
        {
          user ?
          <UserDropDown handleLogout={handleLogout} user={user} />
          :
          <Link to="/login" className='text-lg text-blue-600 font-bold underline'>Login</Link>
        }
        {/* sell */}
        <Link to="/sell" className="btn btn-outline btn-primary rounded-full">
            <FaPlus />
            Sell
        </Link>
    </nav>
  )
}

export default memo(Header)