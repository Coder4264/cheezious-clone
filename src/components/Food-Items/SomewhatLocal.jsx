import React from 'react'
import CartButton from '../CartButton'

export default function SomewhatLocal() {
    const SomewhatLocal = [
        {
            id: 1,
            title: "Chicken Tikka",
            subTitle: "Tender Chunks of Marinated Grilled Chicken with Savory Onion",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/16129593211519226473.jpg",
            price: "from 690.00"
        },
        {
            id: 2,
            title: "Chicken Fajita",
            subTitle: "An Authentic Taste of Fajita Marinated Chicken Onion and Bell Peppers.",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/16129588831247331510.jpg",
            price: "from 690.00"
        },
        {
            id: 3,
            title: "Chicken Lover",
            subTitle: "Extreme Quantity of Chicken and Onion with Rich Mozzarella Cheese",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027813671864187338.jpg",
            price: "from 690.00"
        },
        {
            id: 4,
            title: "Vegetable Pizza",
            subTitle: "Vegetables, Pizza Sauce And Cheese",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1642865986.png",
            price: "from 690.00"
        },
        {
            id: 5,
            title: "Chicken Tandoori",
            subTitle: "Our Traditionally Developed Tandoori Chicken with Onion, Olives, Jalapeno and Tomato Sauce",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1629376979.jpg",
            price: "from 690.00"
        },
        {
            id: 6,
            title: "Hot N Spicy",
            subTitle: "Hot and Spicy Chicken Onion, Jalapeno",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new///dish/160278146146021192.jpg",
            price: "690.00"
        },
    ]
    return (
        <div>
            <h1 className='md:text-4xl text-2xl font-bold md:my-10 my-5' id='somewhat-local'>Starters</h1>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-5 mb-20'>
                {SomewhatLocal.map((item) => (
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
