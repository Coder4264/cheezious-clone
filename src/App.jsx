import React from 'react'
import ResponsiveSlider from './ResponsiveSlider'
import Navbar from './components/Navbar'
import SearchPopup from './components/SearchPopup'
import ShortcutOptions from './components/ShortcutOptions'
import Starters from './components/Food-Items/Starters'
import AllRecipes from './components/AllRecipes'
export default function App() {
  return (
    <>
      <Navbar/>
      <div className='my-16'>
        <ResponsiveSlider/>
      </div>
      <ShortcutOptions/>
      <div>
        <AllRecipes/>
      </div>
      </>
  )
}

