import { useState } from 'react';
import Logo from '../../image/onlylogo.png'
import { Link, Navigate } from 'react-router-dom'; // Assuming you have a routing setup
import NotificationBell from '../Notifications/NotificationBell';
import { useAuth } from '../../context/AuthContext';

const DashboardNavbar = ({isMenuOpen, setIsMenuOpen }) => {

    const { user, logout } = useAuth();

    const handleMenuToggle = () => {
        console.log("Menu toggled", isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='py-3 h-16 border-b-[1px] border-slate-200 flex items-center justify-between '>
            {/* hidden when display is large */}
            <div className=" w-12 md:w-[55px] lg:hidden cursor-pointer px-2 py-5 flex items-center justify-between gap-4">
                <div
                    className='pl-4 mt-2 cursor-pointer lg:hidden'
                    onClick={handleMenuToggle}
                >
                    <i className="fi fi-br-bars-staggered text-xl md:text-2xl "></i>
                </div>
                {/* <img src={user?.user?.profilePicture} alt="" className='object-cover h-10' /> */}
            </div>

            {/* search */}
            <div className='flex items-center justify-center bg-[#F1F2F7] gap-2 mx-5 lg:mx-10 max-sm:hidden rounded-md w-lg'>
                <input
                    type="text"
                    placeholder='Search'
                    className='p-2 px-3 bg-transparent outline-none text-sm text-gray-700 sm:bg-green w-48  lg:w-[60vh]'
                />
                <i className='fi fi-rs-search text-gray-400 mr-2 mt-1'></i>
            </div>

            {/* userProfile and notifications */}
            <div className='flex items-center gap-4 mr-5 md:mr-12'>
                {/* Notification Bell */}
                <NotificationBell />
                
                {/* User Profile */}
                <div className='flex items-center gap-2 max-md:mr-2  mr-4'>
                    <Link to={'/donor-dashboard/account'}  className='h-10 w-10 flex-none rounded-full bg-[#F1F2F7] overflow-hidden '>
                        <img src={user?.user?.profilePicture} alt="" className='object-cover h-10' />
                    </Link>  
                    <div className='hidden md:block'>
                        <span className='text-md text-indigo-600 font-semibold text-gray-700'>
                            {user?.user?.name || 'Donor'}
                        </span>
                        {/* <div className='text-sm -mt-2 text-gray-500 capitalize'>
                            {user?.role || 'donor'}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardNavbar;