import React, { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [Data, setData] = React.useState(null)
  useEffect(() => {
    setLocalStorage()
    const {employee,admin} = getLocalStorage()
    setData({employee,admin})
  }, [])

  return (
    <AuthContext.Provider value={[Data, setData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;