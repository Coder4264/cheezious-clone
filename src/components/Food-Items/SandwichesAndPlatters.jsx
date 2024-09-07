import React from 'react'

export default function SandwichesAndPlatters() {
    const SandwichesAndPlatters = [
        {
            id: 1,
            title: "Special Roasted Platter",
            subTitle: "4 Pcs Behari Rolls, 6pcs Wings Served with Fries & Sauce",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1628885597.jpg",
            price: "1,200.00"
        },
        {
            id: 2,
            title: "Classic Roll Platter",
            subTitle: "4Pcs Behari Rolls, 4pcs Arabic Rolls Served with Fries & Sauce",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027847421791230509.jpg",
            price: "from 1,200.00"
        },
        {
            id: 3,
            title: "Euro Sandwich",
            subTitle: "Mozzarella Dipped Black Pepper Chicken Topped with Garlic Sauce, Pineapples and  Tomato’s Served in Baked Bread.",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1632305153.jpg",
            price: "from 920.00"
        },
        {
            id: 4,
            title: "Mexican Sandwich",
            subTitle: "Mozzarella Dipped Chicken Topped with Garlic Sauce, Tomato’s Served in Baked Bread.",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1632305191.jpg",
            price: "from 920.00"
        },
        {
            id: 5,
            title: "Pizza Stacker",
            subTitle: "A Unique Blend of Delicious Sauce, Crispy Chicken and Pizza Crust.",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027847051721315201.jpg",
            price: "from 920.00"
        },
    ]
    return (
        <div className=''>
            <h1 className='md:text-4xl text-2xl font-bold md:my-10 my-5 ' id='sandwiches-platters'>Sandwiches & Platters</h1>
            <div className='grid grid-cols-2 lg:grid-cols-6  gap-5 mb-20'>
            {SandwichesAndPlatters.map(({ id, title, subTitle, imgUrl, price }) => (
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
