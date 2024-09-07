import React from 'react'

export default function SideOrders() {
    const SideOrders = [
        {
            id: 1,
            title: "Chicken Piece",
            subTitle: "Crispy Chicken",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027851431301044749.jpg",
            price: "from 300.00"
        },
        {
            id: 2,
            title: "Nuggets",
            subTitle: "5 Pcs",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new/250797/250797/dish/16002793261912448111.png",
            price: "450.00"
        },
        {
            id: 3,
            title: "Fries",
            subTitle: "Tasty Fries",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new/250795/250795/dish/16002792901921017015.png",
            price: "from 220.00"
        },
    ]
    return (
        <div className=''>
            <h1 className='md:text-4xl text-2xl font-bold md:my-10 my-5 ' id='side-orders'>Side Orders </h1>
            <div className='grid grid-cols-2 lg:grid-cols-6  gap-5 mb-20'>
            {SideOrders.map(({ id, title, subTitle, imgUrl, price }) => (
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
