import React from 'react'
// import Navbar from "../components/navbar/Navbar";
import Gallery from '../components/Gallery';
import Splidecar from '../components/Splide';
import Swiper from '../components/Swiper';
import Blog from '../components/Blog';
import Slider from '../components/Slider';
import Prix from '../components/Prix';
import Inscription from '../components/Inscription';
import Promo from '../components/Promo';
import Carousel from '../components/Carousel';





function Accueil () {
  return (
    <div>
        <Slider/>
        <Prix/>
        <Promo/>
        <Gallery/>
        <Promo/>
        <Inscription/>
        <Promo/>
        <Carousel/>
        <Promo/>
    </div>
  )
}

export default Accueil;