import React from 'react'

export default function CheezyTreats() {
    const CheezyTreats = [
        {
            id: 1,
            title: "Cheezious Special",
            subTitle: "Delicious Special Chicken with Black Olives, Sausages and Bell Pepper",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/161288351560704272.jpg",
            price: "from 1,550.00"
        },
        {
            id: 2,
            title: "Chicken Extreme",
            subTitle: "Combination Of 3 Flavors of Chicken with Onion Bell Pepper, Green Olives, Mushrooms and Special Sauce",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new///dish/16027866211808193155.jpg",
            price: "from 1,550.00"
        },
        {
            id: 3,
            title: "Behari Kebab",
            subTitle: "Enjoy Special Chicken Bihari Kabab, Grilled Chicken with Onion Jalapenos and Ginger Garnishing",
            imgUrl: "https://em-cdn.eatmubarak.pk/restaurant_new/54946/54946/dish/16129648331142483410.jpg",
            price: "from 1,550.00"
        },
    ]
    return (
        <div className=''>
            <h1 className='md:text-4xl text-2xl font-bold md:my-10 my-5 ' id='cheezy-treats'>Cheezy Treats</h1>
            <div className='grid grid-cols-2 lg:grid-cols-6  gap-5 mb-20'>
            {CheezyTreats.map(({ id, title, subTitle, imgUrl, price }) => (
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
