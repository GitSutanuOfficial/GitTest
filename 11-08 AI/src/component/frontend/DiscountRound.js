import React from 'react'

function DiscountRound({discount,classpass}) {
    return (
        <div className='discount disc2-red'>
            <em>{discount}</em>
            <span>off</span>
        </div>
    )
}

export default DiscountRound