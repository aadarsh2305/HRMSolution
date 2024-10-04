import React, { useState, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown ';
import { FcGenericSortingAsc } from "react-icons/fc";

const Navbar = () => {
    const { accounts, instance } = useMsal();
    const navigate = useNavigate();
    const [username, setUsername] = useState('Aadarsh');

    useEffect(() => {
        if (accounts.length > 0) {
            setUsername(accounts[0].name);
        }
    }, [accounts]);

    const handleLogout = () => {
        instance.logoutPopup();
        navigate('/');
    };


    return (
        <nav className="bg-gray-50 p-4 flex justify-between items-center shadow-md border-b-2">
            <div className="flex items-center space-x-2">
                <FcGenericSortingAsc size={25} className='bg-black rounded-full'/>
                <div className="text-lg font-bold text-black">
                    Prolifics RMG
                </div>
            </div>
            {username && (
                <div className="flex items-center space-x-4">
                    <span className="text-md">Welcome, {username}!</span>
                    <ProfileDropdown onLogout={handleLogout} user={username}/>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
