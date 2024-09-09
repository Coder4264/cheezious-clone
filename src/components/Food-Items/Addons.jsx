import React from 'react'
import CartButton from '../CartButton'

export default function Addons() {
    const Addons = [
        {
            id: 1,
            title: "Juice",
            subTitle: "",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1628885996.jpg",
            price: "60.00"
        },
        {
            id: 2,
            title: "Mayo Dip",
            subTitle: "",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1628885923.jpg",
            price: "80.00"
        },
        {
            id: 3,
            title: "Soft Drink",
            subTitle: "",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1714988722.jpg",
            price: "from 100.00"
        },
        {
            id: 4,
            title: "Small Water",
            subTitle: "",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new///dish/1602785899878559132.jpg",
            price: "60.00"
        },
    ]
    return (
        <div>
            <h1 className='md:text-4xl text-2xl font-bold md:my-10 my-5' id='addons'>Starters</h1>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-5 mb-20'>
                {Addons.map((item) => (
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
