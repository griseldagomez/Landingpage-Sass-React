import React from 'react'
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

import Products from './Sections/Products';
import CardPhoto  from './Sections/CardPhoto';
import Decoration from './Sections/Decoration';
import AboutUs from './infoSection/AboutUs';
import GalleryImages from './Gallery/GalleryImages';
import Map from './Location/Map';

function HomePage() {
  return (
    <>
    
    <Header />

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