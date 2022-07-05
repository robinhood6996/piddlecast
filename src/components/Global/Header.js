import React from 'react';
import logo from '../../assets/images/logo.png'
const Header = () => {
    return (
        <>
            <div class="col-md-12 flogosection">
                <div class="container-fluid">
                    <div class="row align-items-center">

                        <div class="col-md-1 col-3 borderright">
                            <center><a href="home.php"><img src={logo} class="img-fluid" alt="" /></a></center>
                        </div>

                        <div class="col-md-5 col-8">
                            <div class="input-group search">
                                <div class="input-group-append">
                                    <button class="btn" type="submit" >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1527 15.0943H16.0686L15.6844 14.7238C17.0292 13.1595 17.8388 11.1286 17.8388 8.91938C17.8388 3.99314 13.8456 0 8.91938 0C3.99314 0 0 3.99314 0 8.91938C0 13.8456 3.99314 17.8388 8.91938 17.8388C11.1286 17.8388 13.1595 17.0292 14.7238 15.6844L15.0943 16.0686V17.1527L21.9554 24L24 21.9554L17.1527 15.0943ZM8.91938 15.0943C5.50257 15.0943 2.74443 12.3362 2.74443 8.91938C2.74443 5.50257 5.50257 2.74443 8.91938 2.74443C12.3362 2.74443 15.0943 5.50257 15.0943 8.91938C15.0943 12.3362 12.3362 15.0943 8.91938 15.0943Z" fill="#898989" fill-opacity="0.8" />
                                        </svg>
                                    </button>
                                </div>
                                <input type="text" class="form-control border-0 searchbox" name="search" placeholder="Buscar cursos" autocomplete="off" required="" />
                            </div>
                        </div>

                        <div class="col-md-6 d-none d-md-block">
                            <div class="logmenu">
                                <li><a href="/">Sign Up</a></li>
                                <li><a href="/" class="active">Login</a></li>
                            </div>
                        </div>

                        <div class="d-block d-md-none col-1">
                            <center><a href data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ fontSize: '30px', Color: "#52A9AD" }}><i class="bi bi-list"></i></a></center>
                        </div>


                    </div>
                </div>
            </div>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ transition: "0.9s" }}>
                <div class="offcanvas-header border-bottom">
                    <span>Menus</span>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body sidemenu">

                    <li><a href="home.php"><i class="bi bi-house-door"></i>&nbsp;&nbsp;Home</a></li>
                    <li><a href="home.php"><i class="bi bi-search"></i>&nbsp;&nbsp;Search</a></li>
                    <li><a href="home.php"><i class="bi bi-suit-heart"></i>&nbsp;&nbsp;Favorites</a></li>
                    <li><a href="home.php"><i class="bi bi-person-check"></i>&nbsp;&nbsp;My Account</a></li>
                    <li><a href="home.php"><i class="bi bi-gear"></i>&nbsp;&nbsp;Settings</a></li>




                </div>
            </div>
        </>
    );
};

export default Header;