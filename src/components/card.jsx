import React from 'react'

export default function card({ children }) {
    return (
        <div className='bg-cardBlack rounded-lg shadow-xl min-h-[50px] sm:mt-0  mt-1 p-4'>{children}</div>
    )
}
