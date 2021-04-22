import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';

function Logout() {
    const { user, logout } = useContext(AuthContext);
    return (
        <div>
                
        </div>
    )
}

export default Logout
