import React from 'react'
import TopHeader from './TopHeader'
import MainHeader from './MainHeader'

function Header() {
    return (
        <div>
            <div className='flex justify-center bg-secondaryColor'>
                <TopHeader />
            </div>
            <div className='flex justify-center'>
                <MainHeader />
            </div>
        </div>
    )
}

export default Header