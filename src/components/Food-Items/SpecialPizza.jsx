import React from 'react'

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
            imgUrl: "Special Chicken, Green Olives, Mushroom, Edges Filled With Cheese Or Kabab",
            price: "from 1,600.00"
        },
    ]
    return (
        <div className='w-[88vw] m-auto '>
            <h1 className='text-4xl font-bold my-10 ' id='special-pizza'>Special Pizza</h1>
            <div className='grid grid-cols-2 lg:grid-cols-6  gap-5 mb-20'>
            {SpecialPizza.map(({ id, title, subTitle, imgUrl, price }) => (
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
