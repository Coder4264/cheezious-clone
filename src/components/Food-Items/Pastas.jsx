import React from 'react'

export default function Pastas() {
    const Pastas = [
        {
            id: 1,
            title: "Fettuccine Alfredo",
            subTitle: "Fettuccine pasta tossed in creamy white sauce with mushrooms and chicken chunks",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1724908515.jpg",
            price: "1,050.00"
        },
        {
            id: 2,
            title: "Crunchy Chicken Pasta",
            subTitle: "Yummiest Macaroni Pasta in White Sauce Topped with Crispy Chicken & Cheese",
            imgUrl: "https://em-cdn.eatmubarak.pk/54946/dish_image/1621634810.jpg",
            price: "950.00"
        },
    ]
    return (
        <div className=''>
            <h1 className='md:text-4xl text-2xl font-bold md:my-10 my-5 ' id='pastas'>Pastas </h1>
            <div className='grid grid-cols-2 lg:grid-cols-6  gap-5 mb-20'>
            {Pastas.map(({ id, title, subTitle, imgUrl, price }) => (
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
