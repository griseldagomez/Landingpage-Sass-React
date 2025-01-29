import React from 'react'
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import IconHeart from './Icons/IconHeart';
import IconShopping from './Icons/IconShopping';
import IconUser from './Icons/IconUser';
import Products from './Sections/Products';
import CardPhoto  from './Sections/CardPhoto';
import Decoration from './Sections/Decoration';
import AboutUs from './infoSection/AboutUs';
import GalleryImages from './Gallery/GalleryImages';
import Map from './Location/Map';

function HomePage() {
  return (
    <>
    <nav class="head">
    <Header />

    <div class="icons">
        <button class="profile">
            <IconUser />
        </button>

        <button class="wishlists">
            <IconHeart />
        </button>

        <button class="cart">
            <IconShopping />
        </button>
    </div>
</nav>

<main class="main-section">
    <Hero />

    <Products />

    <CardPhoto />

    <Decoration />

    <section class="info-section">
        <AboutUs />

        <GalleryImages />

        <Map />
    </section>
</main>
<Footer/>
</>
  )
}

export default HomePage;