import React from 'react'

export default function Starters() {
    const starter = [
        {
            id: 1,
            title: "Cheezy Sticks",
            subTitle: "Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027793711771744869.jpg",
            price: "630.00"
        },
        {
            id: 2,
            title: "Oven Baked Wings",
            subTitle: "Fresh Oven Baked Wings Served With Dip Sauce",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new///dish/1602778646768992842.jpg",
            price: "from 600.00"
        },
        {
            id: 3,
            title: "Flaming Wings",
            subTitle: "Fresh Oven Baked Wings Tossed In Hot Peri Peri Sauce And Served With Dip Sauce",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/1612872495497065653.png",
            price: "from 650.00"
        },
        {
            id: 4,
            title: "Calzone Chunks",
            subTitle: "4 Pcs Stuffed Calzone Chunks Served with Sauce & Fries",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027791221858590131.jpg",
            price: "1,150.00"
        },
        {
            id: 5,
            title: "Arabic Rolls",
            subTitle: "4 Pcs Arabic Rolls Stuffed with Yummiest Mix Served with Sauce",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1628885239.png",
            price: "690.00"
        },
        {
            id: 6,
            title: "Behari Rolls",
            subTitle: "4 Pcs Behari Rolls Stuffed with Yummiest Mix Served with Sauce",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1628885324.png",
            price: "690.00"
        },
    ]
    return (
        <div className=''>
            <h1 className='md:text-4xl text-2xl font-bold md:my-10 my-5 ' id='starters'>Starters</h1>
            <div className='grid grid-cols-2 lg:grid-cols-6  gap-5 mb-20'>
            {starter.map(({ id, title, subTitle, imgUrl, price }) => (
                <div className='w-full shadow-lg rounded-xl border-2 border-gray-100 hover:border-3 hover:border-yellow-400 duration-500 flex flex-col justify-betweeb items-center p-2 gap-2 card' key={id}>
                    <img src={imgUrl} className='aspect-square rounded-xl' alt={title} />
                    <h3 className='font-bold'>{title}</h3>
                    <p className='text-sm line-clamp-2 overflow-hidden'>
                        {subTitle}
                    </p>
                    <div className='w-full h-px bg-gray-200'></div>
                    <p className='font-bold text-red-500'>Rs: {price}</p>
                    <button className='border py-2 px-4 rounded-2xl bg-red-600 text-white'>Add to Cart</button>
                </div>
            ))}
            </div>
        </div>
    )
}
