import React from 'react'
import CartButton from '../CartButton'

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
        <div>
            <h1 className='md:text-4xl text-2xl font-bold md:my-10 my-5' id='starters'>Starters</h1>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-5 mb-20'>
                {Burgerz.map((item) => (
                    <div
                        className='w-full shadow-lg rounded-xl border-2 border-gray-100 hover:border-3 hover:border-yellow-400 duration-500 flex flex-col justify-between items-center p-2 gap-2 card'
                        key={item.id}>
                        <img src={item.imgUrl} className='aspect-square rounded-xl' alt={item.title} />
                        <h3 className='font-bold'>{item.title}</h3>
                        <p className='text-sm line-clamp-2 overflow-hidden'>{item.subTitle}</p>
                        <div className='w-full h-px bg-gray-200'></div>
                        <p className='font-bold text-red-500'>Rs: {item.price}</p>

                        <CartButton
                            bgColor="red"
                            color="white"
                            text="Add to Cart"
                            item={item}  // Pass the item object to CartButton
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
