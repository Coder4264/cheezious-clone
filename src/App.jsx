import React from 'react'
import ResponsiveSlider from './ResponsiveSlider'
import Navbar from './components/Navbar'
import SearchPopup from './components/SearchPopup'
import ShortcutOptions from './components/ShortcutOptions'
import Starters from './components/Food-Items/Starters'
import AllRecipes from './components/AllRecipes'
import Faq from './components/Faq'
import Footer from './components/Footer'
export default function App() {
  return (
    <>
      <Navbar/>
      <div className='md:my-16 my-6'>
        <ResponsiveSlider/>
      </div>
      <ShortcutOptions/>
      <div>
        <AllRecipes/>
      </div>
      <div>
        <Faq/>
        <Footer/>
      </div>
      </>
  )
}

