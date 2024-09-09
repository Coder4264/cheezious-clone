import React from 'react'
import CartButton from '../CartButton'

export default function SomewhatAmazing() {
    const SomewhatAmazing = [
        {
            id: 1,
            title: "Somewhat Amazing 1",
            subTitle: "2 Bazinga, Regular Fries, 2 Regular Drink",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1714988772.jpg",
            price: "1,250.00"
        },
        {
            id: 2,
            title: "Somewhat Amazing 2",
            subTitle: "2 Bazinga Burger,2 Pcs Chicken, Large Fries,2 Regular Drink",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1715354436.jpg",
            price: "1,750.00"
        },
        {
            id: 3,
            title: "Somewhat Amazing 3",
            subTitle: "3 Bazinga Burger, Large Fries, 1 Liter Drink",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1714988807.jpg",
            price: "1,890.00"
        },
        {
            id: 4,
            title: "Somewhat Amazing 4",
            subTitle: "3 Bazinga, 3 Chicken Pieces, 1 Liter Drink",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1714988861.jpg",
            price: "2,150.00"
        },
    ]
    return (
        <div>
            <h1 className='md:text-4xl text-2xl font-bold md:my-10 my-5' id='somewhat-amazing'>Somewhat Amazing</h1>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-5 mb-20'>
                {SomewhatAmazing.map((item) => (
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
