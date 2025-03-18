import React from 'react'
import TopHeader from './TopHeader'
import MainHeader from './MainHeader'

function Header() {
    return (
        <div className='fixed top-0 left-0 w-full z-50 shadow-custom-header'>
            <div className='flex justify-center bg-secondaryColor'>
                <TopHeader />
            </div>
            <div className='flex justify-center bg-white'>
                <MainHeader />
            </div>
        </div>
    )
}

export default Header