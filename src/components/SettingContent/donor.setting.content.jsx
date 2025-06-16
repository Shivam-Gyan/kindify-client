import React from 'react'
import { AnimationWrapper } from '../../common'

const DonorSettingsContent = () => {
    return (
        <AnimationWrapper>

            <div className=''>

                {/* personal information container */}
                <div className='flex gap-4 items-start border-t-[1px]  border-gray-200 mt-4 mb-6 '>

                    {/* introductory */}
                    <div className='w-1/3 mt-10'>
                        <h1 className='text-2xl tracking-normal font-semibold text-gray-600'>Personal Information</h1>
                        <p className='text-md w-80 font-medium tracking-normal text-gray-400'>Use a permanent address where you can recieve mail.</p>
                    </div>

                    <div className='flex flex-col gap-4 items-start w-2/3'>
                        {/* profile image update */}
                        <div className='flex ml-7 mt-5 items-center gap-5'>
                            <span className='bg-white border-2 border-slate-400 rounded-full w-32 h-32'> <img src="https://tse4.mm.bing.net/th?id=OIP.fz29xDdt8iK_0EOsoMF5FwHaHa&pid=Api&P=0&h=180" alt="Profile" className=' rounded-full object-contain' /></span>
                            <span className='flex flex-col items-start gap-2'>
                                <button className='mt-2 h-fit bg-indigo-100 text-slate-600 font-medium hover:scale-105 px-4 py-1 rounded-md hover:scale-[1.01]'>Change avatar</button>
                                <p className='text-sm text-gray-400 ml-2'>JPG or PNG.(1MB max) </p>
                            </span>
                        </div>
                        {/*  */}
                        <div className='w-full  p-5 px-10 '>
                            <form className='flex flex-col'>
                                <h1 className='text-xl text-slate-600 font-medium mt-3 mb-1'>Full name</h1>
                                <div className='flex p-2  gap-2 bg-[#F1F2F7] rounded-md'>
                                    <i className="fi fi-sr-user mt-2 text-gray-500"></i>
                                    <input type="text" placeholder='full name' className='w-full bg-transparent outline-none' />
                                </div>

                                <h1 className='text-xl text-slate-600 font-medium mt-7 mb-1'>Email address</h1>
                                <div className='flex p-2  gap-2 bg-[#F1F2F7] rounded-md'>
                                    <i className="fi fi-br-at mt-2 text-gray-500"></i>
                                    <input type="email" placeholder='email' className='w-full bg-transparent outline-none' />
                                </div>

                                <h1 className='text-xl text-slate-600 font-medium mt-7 mb-1'>Phone number</h1>
                                <div className='flex p-2  gap-2 bg-[#F1F2F7] rounded-md'>
                                    <i className="fi fi-br-hastag mt-2 text-gray-500"></i>
                                    <input type="text" placeholder='phone number' className='w-full bg-transparent outline-none' />
                                </div>
                                <button type='submit' className='mt-2 w-32 py-1 bg-indigo-100 text-slate-600 font-medium rounded-md hover:scale-[1.01]'>Save</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* change/update password container */}
                <div className='flex gap-4 items-start border-t-[1px]  border-gray-200 mt-4 mb-6'>

                    {/* introductory */}
                    <div className='w-1/3 mt-10'>
                        <h1 className='text-2xl tracking-normal font-semibold text-gray-600'>Change password</h1>
                        <p className='text-md w-80 font-medium tracking-normal text-gray-400'>Update your password associated with your account.</p>

                    </div>

                    {/* change password form */}
                    <div className='flex flex-col gap-4 items-start w-2/3'>
                        <div className='w-full  p-5 px-10 '>
                            <form className='flex flex-col'>

                                {/* current password */}
                                <h1 className='text-xl text-slate-600 font-medium mt-7 mb-1'>Current Password</h1>
                                <div className='flex p-2  gap-2 bg-[#F1F2F7] rounded-md'>
                                    <i className="fi fi-ss-key mt-2 text-gray-500"></i>
                                    <input type="text" placeholder='password' className='w-full bg-transparent outline-none' />
                                </div>
                                <h1 className='text-xl text-slate-600 font-medium mt-7 mb-1'>Latest password</h1>
                                <div className='flex p-2  gap-2 bg-[#F1F2F7] rounded-md '>
                                    <i className="fi fi-ss-lock mt-2 text-gray-500"></i>
                                    <input type="text" placeholder='password' className='w-full bg-transparent outline-none ' />
                                </div>
                                <button type='submit' className='mt-2 w-32 py-1 bg-indigo-100 text-slate-600 hover:scale-[1.01] font-medium rounded-md '>Save</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* account delete container */}
                <div className='flex gap-4 items-start border-t-[1px]  border-gray-200 mt-4 '>

                    {/* introductory */}
                    <div className='w-1/3 mt-10'>
                        <h1 className='text-2xl tracking-normal font-semibold text-gray-600'>Delete account</h1>
                        <p className='text-md w-80 font-medium tracking-normal text-gray-400'>No longer want to use our services? You can delete your account here. This action is not reversible. All information related to this account will deleted permanently.</p>
                    </div>

                    {/* delete button */}
                    <div className='flex flex-col gap-4 items-start w-2/3  p-5 px-10 '>
                        <button type='submit' className='mt-2 w-fit py-1 px-10 bg-red-500 text-white font-medium rounded-md hover:scale-[1.01] '>Yes, delete my account</button>
                    </div>

                </div>
            </div>
        </AnimationWrapper>
    )
}

export default DonorSettingsContent