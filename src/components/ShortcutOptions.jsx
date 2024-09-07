import React from 'react'
import { Link } from 'react-scroll'
import Starters from './Food-Items/Starters'

export default function ShortcutOptions() {
    const menus = [
        {
            id: 1,
            title: "Starters",
            location:"starters"
        },
        {
            id: 2,
            title: "Somewhat Local",
            location:"somewhat-local"
        },
        {
            id: 3,
            title: "Somewhat Sooper",
            location:"somewhat-sooper"
        },
        {
            id: 4,
            title: "Cheezy Treats",
            location:"cheezy-treats"
        },
        {
            id: 5,
            title: "Pizza Deals",
            location:"pizza-deals"
        },
        {
            id: 6,
            title: "Sandwiches &  Platters",
            location:"sandwiches-platters"
        },
        {
            id: 7,
            title: "Special Pizza",
            location:"special-pizza"
        },
        {
            id: 8,
            title: "Somewhat Amazing",
            location:"somewhat-amazing"
        },
        {
            id: 9,
            title: "Pastas",
            location:"pastas"
        },
        {
            id: 10,
            title: "Burgerz",
            location:"burgerz"
        },
        {
            id: 11,
            title: "Side Orders",
            location:"side-orders"
        },
        {
            id: 12,
            title: "Addons",
            location:"addons"
        },
    ]
  return (
    <div className='w-[88vw] m-auto p-3 flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide sticky top-20 shortcutbg shadow-lg'>
  {menus.map(({ id, title, location }) => (
    <Link
      activeClass="active"
      to={location}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className='bg-gray-200 font-semibold p-2 rounded-2xl hover:bg-yellow-300 cursor-pointer duration-700 w-[100%]'
      key={id}
    >
      {title}
    </Link>
  ))}
  
</div>

  )
}
