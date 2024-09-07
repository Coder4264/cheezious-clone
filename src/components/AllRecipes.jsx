import React from 'react'
import Starters from './Food-Items/Starters'
import SomewhatLocal from './Food-Items/SomewhatLocal'
import SomewhatSooper from './Food-Items/SomewhatSooper'
import CheezyTreats from './Food-Items/CheezyTreats'
import PizzaDeals from './Food-Items/PizzaDeals'
import SandwichesAndPlatters from './Food-Items/SandwichesAndPlatters'
import SpecialPizza from './Food-Items/SpecialPizza'
import SomewhatAmazing from './Food-Items/SomewhatAmazing.jsx'
import Pastas from './Food-Items/Pastas.jsx'
import Burgerz from './Food-Items/Burgerz.jsx'
import SideOrders from './Food-Items/SideOrders.jsx'
import Addons from './Food-Items/Addons.jsx'

export default function AllRecipes() {
  return (
    <div className='w-[88vw] m-auto'>
        <Starters/>
        <SomewhatLocal/>
        <SomewhatSooper/>
        <CheezyTreats/>
        <PizzaDeals/>
        <SandwichesAndPlatters/>
        <SpecialPizza/>
        <SomewhatAmazing/>
        <Pastas/>
        <Burgerz/>
        <SideOrders/>
        <Addons/>
    </div>
  )
}
