import { Link, NavLink,useNavigate } from "react-router-dom";
import React from "react";
import image1 from "../../assets/images/logo-1.png";
import { useContext } from 'react';
import { AuthContext } from "../Auth/AuthContext";


function Header() {
    const navigate = useNavigate();

    const { isAuthenticated, logout, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

    return (
        <>
            <header className="header-area header-two">
                <div className="header-navigation">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-5">
                                <div className="brand-logo">
                                    <a href="index.html">
                                        <img
                                            src={image1}
                                            className="img-fluid"
                                            alt="Logo"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-4 col-2">
                                <div className="nav-menu">
                                    {/* <!-- navbar-close --> */}
                                    <div className="navbar-close">
                                        <div className="cross-wrap">
                                            <span className="top"></span>
                                            <span className="bottom"></span>
                                        </div>
                                    </div>
                                    {/* <!-- Mobile Menu Logo --> */}
                                    <div className="brand-logo text-center ml-2 mr-2 mb-4">
                                        <a href="index.html">
                                            <img
                                                src="assets/images/logo-1.png"
                                                className="img-fluid"
                                                alt="Logo"
                                            />
                                        </a>
                                    </div>
                                    {/* <!-- Search form --> */}
                                    <div className="nav-search ml-3 mr-3">
                                        <form>
                                            <div className="lang-dropdown">
                                                <select className="wide mb-40">
                                                    <option value="01">
                                                        En
                                                    </option>
                                                    <option value="02">
                                                        Ru
                                                    </option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!-- main menu --> */}
                                    <nav className="main-menu">
                                        <ul>
                                            <li className="menu-item menu-item-has-children">
                                                <a href="#home">Home</a>
                                                <ul className="sub-menu">
                                                    <li>


                                                        <NavLink
                                                        to="/"
                                                    // className={({isActive})=>`${isActive?"iamactive":"text-success"}`}    
                                                        >
                                                        Home 1
                                                        </NavLink>
                                                        
                                                        
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item">
                                                <NavLink to="about.html">
                                                    About
                                                </NavLink>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <a href="#service">Service</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="services.html">
                                                            Services
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="service-details.html">
                                                            Service Details
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="categories.html">
                                                            Service Categories
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <a href="#pages">Pages</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="about.html">
                                                            About
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="seller-details.html">
                                                            Seller Details
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="quote.html">
                                                            Quote
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="testimonial.html">
                                                            Testimonial
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="faq.html">
                                                            Faq
                                                        </a>
                                                    </li>


                                                    {isAuthenticated ? (
          <>
{console.log(isAuthenticated)}
                                                                <li>
                                                        <NavLink
                                                        onClick={logout}
                                                        >
                                                        Logout
                                                        </NavLink>
                                                    </li>
            <li>
                <NavLink
                to={'/create_exchange'}
                >
                Make Exchange
                </NavLink>

                </li>
          </>
        ) : (
<>
          
            <li>
{/* {alert(isAuthenticated)} */}
            <NavLink to={"/login"}
            
            >
            Login
            </NavLink>
        </li>


        


                                                    <li>
                                                        
                                                    <NavLink to="/signup" 
                                                    // className={({isActive})=>`${isActive?"iamactive":"text-success"}`}
                                                    
                                                    >
                                                    Sign Up
                                                    </NavLink>
                                                        
                                                    </li>
        </>

        )}


                                                    {/* <li>
                                                        <NavLink to={"/login"}
                                                        
                                                        >
                                                        Login
                                                        </NavLink>
                                                    </li> */}

                                                    <li>
                                                        <a href="404.html">
                                                            Error 404
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="coming-soon.html">
                                                            Coming Soon
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="terms-conditions.html">
                                                            Terms & Conditions
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <a href="#blog">Blog</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blogs.html">
                                                            Blogs
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">
                                                            Blog Details
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item">
                                                <a href="contact.html">
                                                    contact
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-5">
                                <div className="nav-tools">
                                    <ul>
                                        <li className="search-btn">
                                            <a
                                                href="#search-modal"
                                                className="icon"
                                                data-toggle="modal"
                                                data-target="#search-modal"
                                            >
                                                <i className="far fa-search"></i>
                                            </a>
                                        </li>
                                        <li className="wishlist-btn">
                                            <a href="404.html" className="icon">
                                                <i className="fas fa-heart"></i>
                                            </a>
                                        </li>
                                        <li className="lang-dropdown">
                                            <select className="wide">
                                                <option value="01">En</option>
                                                <option value="02">Ru</option>
                                            </select>
                                        </li>
                                        <li className="nav-toggle-btn">
                                            <div className="navbar-toggler">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
