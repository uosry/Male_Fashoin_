import React from 'react'
import { Navigate } from 'react-router-dom'

const Chekadmin = ({children}) => {
  if(localStorage.role==="admin"){
    return children
  }else{
    return (
 <Navigate to={"/"}/>
        )
  }
  
   
}

export default Chekadmin