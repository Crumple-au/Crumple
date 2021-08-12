import React from 'react'

function SortBy({label, sort, set}) {

    const option1 = label === 'price' ? 'highest' : 'newest'
    const option2 = label === 'price' ? 'lowest' : 'oldest'

    return (
        <>
            <label htmlFor={label}>{label}</label>
            <select
                id={label}
                value={sort}
                onChange={(e) => set(e.target.value)}>

                <option value={option1}>{option1}</option>
                <option value={option2}>{option2}</option>
            </select>
        </>
    )
}

export default SortBy
