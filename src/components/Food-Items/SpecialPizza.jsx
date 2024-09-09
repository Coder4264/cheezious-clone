import React from 'react'
import CartButton from '../CartButton'

export default function SpecialPizza() {
    const SpecialPizza = [
        {
            id: 1,
            title: "Crown Crust",
            subTitle: "Scrumptious Pizza with A Yummy Blend of Grilled Chicken, Olives, Onion, Capsicum and Special Sauce",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1715354525.jpg",
            price: "from 1,550.00"
        },
        {
            id: 2,
            title: "Stuff Crust Pizza",
            subTitle: "Special Chicken, Green Olives, Mushroom, Edges Filled With Cheese Or Kabab",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/16129654997952468.jpg",
            price: "from 1,600.00"
        },
    ]
    return (
        <div>
            <h1 className='md:text-4xl text-2xl font-bold md:my-10 my-5' id='special-pizza'>Special Pizza</h1>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-5 mb-20'>
                {SpecialPizza.map((item) => (
                    <div
                        className='w-full shadow-lg rounded-xl border-2 border-gray-100 hover:border-3 hover:border-yellow-400 duration-500 flex flex-col justify-between items-center p-2 gap-2 card'
                        key={item.id}>
                        <img src={item.imgUrl} className='aspect-square rounded-xl' alt={item.title} />
                        <h3 className='font-bold text-center text-sm md:text-lg'>{item.title}</h3>
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
