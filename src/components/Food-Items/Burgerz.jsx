import React from 'react'

export default function Burgerz() {
    const Burgerz = [
        {
            id: 1,
            title: "Reggy Burger",
            subTitle: "Perfectly Fried Chicken Patty  With Fresh Lettuce and Sauce in a Sesame Seed Bun",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new///dish/16044237781581702297.png",
            price: "390.00"
        },
        {
            id: 2,
            title: "Bazinga Burger",
            subTitle: "Crispy Fried To Perfection Boneless Thigh with Signature Sauce and Lettuce Held in Corn-Dusted Bun.",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new///dish/16044237981879245680.png",
            price: "560.00"
        },
    ]
    return (
        <div className=''>
            <h1 className='md:text-4xl text-2xl font-bold md:my-10 my-5 ' id='burgerz'>Burgerz </h1>
            <div className='grid grid-cols-2 lg:grid-cols-6  gap-5 mb-20'>
            {Burgerz.map(({ id, title, subTitle, imgUrl, price }) => (
                <div className='w-full shadow-lg rounded-xl border-2 border-gray-100 hover:border-3 hover:border-yellow-400 duration-500 flex flex-col justify-betweeb items-center p-2 gap-2 card' key={id}>
                    <img src={imgUrl} className='aspect-square rounded-xl' alt={title} />
                    <h3 className='font-bold'>{title}</h3>
                    <p className='text-sm line-clamp-2 overflow-hidden '>
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
