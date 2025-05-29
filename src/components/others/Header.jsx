import React from 'react'

const LogoutUser = ({ changeUser }) => {
  localStorage.removeItem("LoggedInUser");
  changeUser("");
}

const Header = (props) => {
  return (
    <div className='flex justify-between items-end text-white'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.userData.name}👋</span></h1>
        <button onClick={() => LogoutUser({ changeUser: props.changeUser })} className='bg-red-500 text-xl font-medium text-white px-4 py-2 cursor-pointer active:scale-95 active:bg-red-700 hover:bg-red-600 rounded'>Log Out</button>
    </div>
  )
}

export default Header