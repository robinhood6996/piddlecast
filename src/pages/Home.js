import React from 'react';
import Header from '../components/Global/Header';
import Menu from '../components/Global/Menu';
import Categories from '../components/Home/Categories';
import Episods from '../components/Home/Episods';
import Hero from '../components/Home/Hero';
import PopularEpisods from '../components/Home/PopularEpisods';

const Home = () => {
    return (
        <div>
            <Header />
            <div class="col-md-12 fsidemenu">
                <div class="container-fluid">
                    <div class="row">
                        <Menu />

                        <div class="col-md-11 p-0">
                            <Hero />

                            <div className="position-relative w-100 after-hero-con">
                                <div className='container-fluid after-hero'>
                                </div>

                            </div>

                            <div class="container-fluid">
                                <Episods />
                                <PopularEpisods />
                                <Categories />


                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;