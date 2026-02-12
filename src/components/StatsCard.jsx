import React from 'react'

const StatsCard = () => {

    const cardData = [
        {
            label: "Total Orders",
            value: 120,
        },
        {
            label: "Delivered",
            value: 80,
        },
        {
            label: "In Transit",
            value: 25,
        },
        {
            label: "Pending",
            value: 15,
        },
    ]
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                {cardData.map((item, index) => (
                    <div key={index} className='bg-white p-5 rounded-lg shadow-sm border border-gray-200'>
                        <p className='text-sm text-gray-500'>{item.label}</p>
                        <h3 className='text-2xl font-bold mt-2'>{item.value}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default StatsCard