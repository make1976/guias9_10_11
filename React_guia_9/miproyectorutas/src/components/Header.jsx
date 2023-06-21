import React, { useContext } from 'react'
import { Context } from '../contexts/UserContext'

const Header = () => {
    const { user } = useContext(Context)
    return (
        <div className='Header'>
            Sesion iniciada como @{user.username}
        </div>
    )
}

export default Header
