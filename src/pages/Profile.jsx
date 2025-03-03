import React from 'react'
import { useLocation } from 'react-router-dom'

const Profile = () => {
    const {state} = useLocation()

    
  return (
    <div>
        <h2>Profile : {state?.name}</h2></div>
  )
}

export default Profile