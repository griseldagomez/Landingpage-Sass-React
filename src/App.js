import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import IconHeart from './Components/Icons/IconHeart';
import IconShopping from './Components/Icons/IconShopping';
import IconUser from './Components/Icons/IconUser';
import Products from './Components/Sections/Products';
import CardPhoto  from './Components/Sections/CardPhoto';
import Decoration from './Components/Sections/Decoration';
import AboutUs from './Components/infoSection/AboutUs';
import GalleryImages from './Components/Gallery/GalleryImages';
import Map from './Components/Location/Map';



function App() {
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
    );
}
export default App;
