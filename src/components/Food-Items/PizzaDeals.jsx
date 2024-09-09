import React from 'react'
import CartButton from '../CartButton'

export default function PizzaDeals() {
    const PizzaDeals = [
        {
            id: 1,
            title: "Small Pizza Deal",
            subTitle: "Any Flavor From Local Love Or Over the Sea Flavor Category & 1 Soft Drink",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1714988666.jpg",
            price: "750.00"
        },
        {
            id: 2,
            title: "Regular Pizza Deal",
            subTitle: "1 Regular Pizza and 2 Regular Drinks.",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1714988629.jpg",
            price: "from 1,450.00"
        },
        {
            id: 3,
            title: "Large Pizza Deal",
            subTitle: "Any Flavor From Local Love Or Over the Sea Flavor Category & 1 Liter Drink",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1714988551.jpg",
            price: "from 1,990.00"
        },
    ]
    return (
        <div>
            <h1 className='md:text-4xl text-2xl font-bold md:my-10 my-5' id='pizza-deals'>Pizza Deals</h1>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-5 mb-20'>
                {PizzaDeals.map((item) => (
                    <div
                        className='w-full shadow-lg rounded-xl border-2 border-gray-100 hover:border-3 hover:border-yellow-400 duration-500 flex flex-col justify-between items-center p-2 gap-2 card'
                        key={item.id}>
                        <img src={item.imgUrl} className='aspect-square rounded-xl' alt={item.title} />
                        <h3 className='font-bold text-center'>{item.title}</h3>
                        <p className='text-sm line-clamp-2 overflow-hidden text-center'>{item.subTitle}</p>
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
