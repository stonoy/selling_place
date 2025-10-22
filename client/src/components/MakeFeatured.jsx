import React, { useRef, useState } from 'react'
import {customFetch} from "../utilsClient"
import {useNavigate} from "react-router-dom"

const MakeFeatured = ({isFeatured, productId}) => {
    const [processing, setProssing] = useState(false)
  const orderIdRef = useRef(null)
  const navigate = useNavigate()

  const verifyPayment = async() => {
    try {
      const resp = await customFetch.get(`/payment/verify/${orderIdRef.current}`)

      console.log(resp.data)

      if (resp?.data?.paymentReceived == "successful"){
        console.log("payment successful")
        navigate(0)
      }
    } catch (error) {
      console.log(error?.response?.data?.msg)
      // toast.error(error?.response?.data?.msg)
    }
  }

  const handleFeatured = async () => {
        if (isFeatured){return}

    setProssing(true)
    try {
      const resp = await customFetch.get(`/payment/initiate/${productId}`)

      // console.log(resp?.data)

      const {amount, key, id, notes: {name, email}} = resp?.data

      // set orderId for future use
      orderIdRef.current = id

      console.log(amount, key, id, name, email)

      const options = {
        key, // Replace with your Razorpay key_id.
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: "Add to Featured",
        description: 'Test Transaction',
        order_id: id, // This is the order_id created in the backend
        
        prefill: {
          name,
          email,
        },
        theme: {
          color: '#F37254'
        },
        handler: verifyPayment,
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error?.response?.data?.msg)
    }
    setProssing(false)
    }

  return (
    <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Mark as Featured</span>
                {
                    !isFeatured ?
                    <input
                  type="checkbox"
                  name="featured"
                  checked={isFeatured}
                  onChange={handleFeatured}
                  disabled={processing}
                  className="checkbox checkbox-primary"
                />
                :
                <input
                  type="checkbox"
                  name="featured"
                  checked={isFeatured}
                //   onChange={handleChange}
                  className="checkbox checkbox-primary"
                />
                }
              </label>
    </div>
  )
}

export default MakeFeatured