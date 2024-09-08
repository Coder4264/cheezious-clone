import React from 'react'
import CartButton from '../CartButton'

export default function SomewhatSooper() {
    const SomewhatSooper = [
        {
            id: 1,
            title: "Cheese Lover Pizza",
            subTitle: "Yummiest Blend of Cheese and Pizza Sauce",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/1612956575722870824.jpg",
            price: "from 690.00"
        },
        {
            id: 2,
            title: "Black Pepper Tikka",
            subTitle: "A Blend of Marinated Black Pepper Chicken, Onion & Bell Pepper",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1629377928.jpg",
            price: "from 690.00"
        },
        {
            id: 3,
            title: "Sausage Pizza",
            subTitle: "Chicken Sausages, Pizza Sauce and Cheese",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/1612963893566998111.jpg",
            price: "from 690.00"
        },
        {
            id: 4,
            title: "Chicken Mushroom",
            subTitle: "Tender Chunks of Marinated Grilled Chicken Tikka, Lots of Mushrooms, Onion and Tomato Sauce",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/16129646191212361792.jpg",
            price: "from 690.00"
        },
        {
            id: 5,
            title: "Chicken Pepperoni Pizza",
            subTitle: "Chicken Pepperoni, Pizza Sauce and Cheese",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/16129664171069619674.jpg",
            price: "from 690.00"
        },
        {
            id: 6,
            title: "Chicken Supreme",
            subTitle: "A Combination Of 3 Flavors of Chicken, Black Olives, Mushrooms Bell Pepper and Onion with Tomato Sauce.",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/1612956770851148231.jpg",
            price: "690.00"
        },
        {
            id: 7,
            title: "Euro",
            subTitle: "Delight Combination of Specially Marinated Smoked Chicken Bell Pepper, Mushrooms with Tomato Sauce",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027832701370189888.jpg",
            price: "690.00"
        },
    ]
    return (
        <div>
        <h1 className='md:text-4xl text-2xl font-bold md:my-10 my-5' id='starters'>Starters</h1>
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-5 mb-20'>
            {SomewhatSooper.map((item) => (
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
