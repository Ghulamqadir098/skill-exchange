import React from 'react'
import ImagesData from '../../assets/images/images.json'
function Home() {
  return (
    <>
    {/* <!--====== Start Hero ======--> */}
        <section className="hero-area-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1>Your Gateway to Elite Freelancers</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis quae auiorri.</p>
                            <div className="hero-search-form mt-40">
                                <div className="form-wrapper">
                                    <form action="#">
                                        <div className="form-inline">
                                            <input type="text" className="form_control" placeholder="e. g. Shopify store theme" />
                                            <button className="main-btn" type="button">Search<i className="fal fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="banner-tags mt-15">
                                    <span className="color-dark">Popular Searches:</span>
                                    <a href="services.html">Web Design,</a>
                                    <a href="services.html">App Design,</a>
                                    <a href="services.html">Marketing,</a>
                                    <a href="services.html">Graphic</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="hero-img-two">
                            <img src={`${ImagesData.image1}`} alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--====== End Hero ======--> */}

        {/* <!--====== Start Features ======--> */}
        <section className="services-area-two pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-65">
                            <h2>Services We Can Help You</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-sm-6 item">
                        <div className="service-item-two">
                            <div className="icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="content">
                                <h4><a href="services.html">Graphics & Design</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item">
                        <div className="service-item-two">
                            <div className="icon">
                                <i className="fas fa-shapes"></i>
                            </div>
                            <div className="content">
                                <h4><a href="services.html">Digital Marketing</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item">
                        <div className="service-item-two">
                            <div className="icon">
                                <i className="fas fa-megaphone"></i>
                            </div>
                            <div className="content">
                                <h4><a href="services.html">Writing & Translation</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item">
                        <div className="service-item-two">
                            <div className="icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <div className="content">
                                <h4><a href="services.html">Video & Animation</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item">
                        <div className="service-item-two">
                            <div className="icon">
                                <i className="fas fa-paint-brush"></i>
                            </div>
                            <div className="content">
                                <h4><a href="services.html">Music & Audio</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item">
                        <div className="service-item-two">
                            <div className="icon">
                                <i className="fas fa-user-friends"></i>
                            </div>
                            <div className="content">
                                <h4><a href="services.html">Programming & Tech</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item">
                        <div className="service-item-two">
                            <div className="icon">
                                <i className="fas fa-layer-group"></i>
                            </div>
                            <div className="content">
                                <h4><a href="services.html">AI Services</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item">
                        <div className="service-item-two">
                            <div className="icon">
                                <i className="fas fa-industry"></i>
                            </div>
                            <div className="content">
                                <h4><a href="services.html">Video Explainer</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-two-shapes">
                <img className="shape-one" src={`${ImagesData.image2}`} alt="shape"/>
                <img className="shape-two" src={`${ImagesData.image3}`} alt="shape"/>
            </div>
        </section>
        {/* <!--====== End Features ======--> */}

        {/* <!--====== Start Featured Services ======--> */}
        <section className="popular-services-area pb-120">
            <div className="container">
                <div className="row justify-content-center mb-40">
                    <div className="col-xl-5 col-lg-6">
                        <div className="section-title text-center">
                            <h2> Most Popular Services </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="popular-service-nav mb-40">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a href="#service1" className="nav-link active" data-toggle="tab">
                                        Graphics &amp; Design
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#service2" className="nav-link " data-toggle="tab">
                                        Programming &amp; Tech
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#service3" className="nav-link " data-toggle="tab">
                                        Writing &amp; Translation
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="tab-content">
                    <div id="service1" className="tab-pane fade show active">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image4}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image5}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Nancy Reyes</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will do wix website design, wix website redesign or redesign wix website</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.5)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$10.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image6}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image7}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Maria Mae</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will do website and landing page UI UX design in figma, xd format</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.8)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$13.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image8}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image9}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Alex Embroce</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will do responsive business wordpress website design or build ecommerce</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.6)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$11.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image10}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image11}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Johnny Mars</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will design a professional responsive website for your business</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.5)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$09.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image12}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image13}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Designer Hub</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will do website ui ux, web app ux ui, ui ux design, creative ui design</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.7)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$11.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image14}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image15}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Tommy Yong</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will install elementor pro, astra pro, divi theme, wp rocket, crocoblock plugin</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.2)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$14.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image16}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image17}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Molina De</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will build and design a wordpress website using divi, elementor</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.4)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$19.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image18}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image19}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Zain Saeed</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will design or redesign wix website and wix ecommerce website</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.1)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$10.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="service2" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image20}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image21}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Nancy Reyes</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will do wix website design, wix website redesign or redesign wix website</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.5)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$10.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image22}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image23}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Maria Mae</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will do website and landing page UI UX design in figma, xd format</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.8)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$13.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image24}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image25}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Alex Embroce</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will do responsive business wordpress website design or build ecommerce</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.6)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$11.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image26}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image27}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Johnny Mars</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will design a professional responsive website for your business</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.5)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$09.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image28}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image29}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Designer Hub</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will do website ui ux, web app ux ui, ui ux design, creative ui design</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.7)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$11.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image30}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image31}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Tommy Yong</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will install elementor pro, astra pro, divi theme, wp rocket, crocoblock plugin</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.2)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$14.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image33}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image34}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Molina De</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will build and design a wordpress website using divi, elementor</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.4)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$19.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image35}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image36}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Zain Saeed</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will design or redesign wix website and wix ecommerce website</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.1)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$10.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="service3" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image37}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image38}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Nancy Reyes</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will do wix website design, wix website redesign or redesign wix website</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.5)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$10.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image39}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image40}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Maria Mae</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will do website and landing page UI UX design in figma, xd format</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.8)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$13.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image41}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image42}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Alex Embroce</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will do responsive business wordpress website design or build ecommerce</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.6)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$11.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image43}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image44}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Johnny Mars</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will design a professional responsive website for your business</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.5)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$09.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image45}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image46}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Designer Hub</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will do website ui ux, web app ux ui, ui ux design, creative ui design</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.7)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$11.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image47}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image48}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Tommy Yong</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will install elementor pro, astra pro, divi theme, wp rocket, crocoblock plugin</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.2)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$14.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image49}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image50}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Molina De</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will build and design a wordpress website using divi, elementor</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.4)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$19.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="gig-item mb-30">
                                    <div className="gig-img">
                                        <a href="service-details.html"><img src={`${ImagesData.image51}`} alt="Image"/></a>
                                    </div>
                                    <div className="gig-info">
                                        <div className="gig-top">
                                            <div className="user-title-thumb">
                                                <div className="user-thumb">
                                                    <img className="rounded-circle" src={`${ImagesData.image52}`} alt="Image"/>
                                                </div>
                                                <div className="user-info">
                                                    <h5 className="name">Zain Saeed</h5>
                                                    <p className="status">New seller</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <a href="404.html" className="icon"><i className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title"><a href="service-details.html">I will design or redesign wix website and wix ecommerce website</a></h4>
                                            <div className="rating-info">
                                                <div className="rate">
                                                    <div className="rating">
                                                    </div>
                                                </div>
                                                <span>(4.1)</span>
                                            </div>
                                        </div>
                                        <div className="service-bottom">
                                            <span className="text">Starting at</span>
                                            <span className="nubmer">$10.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-btn text-center mt-30">
                    <a href="services.html" className="main-btn">
                        All Services
                    </a>
                </div>
            </div>
            <img src={`${ImagesData.image53}`} alt="shape" className="pp-service-shape"/>
        </section>
        {/* <!--====== End Featured Services ======--> */}

        {/* <!--====== Start About ======--> */}
        <section className="about-area-two pb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="about-img-two">
                            <img src={`${ImagesData.image54}`} alt="about"/>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="about-two-content">
                            <div className="section-title mb-25">
                                <h2>Take Your Business Life To The Next Level</h2>
                            </div>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <br/>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to
                                use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--====== End About ======--> */}

        {/* <!--====== Start Newsletter ======--> */}
        <section className="newsletter-area-two">
            <div className="container">
                <div className="newsletter-two-inner bg-img" data-bg-img={`${ImagesData.image55}`}>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="newsletter-two-content pt-70 pb-70">
                                <div className="section-title mb-40">
                                    <h2>Now Get Free Business Consultancy</h2>
                                </div>

                                <form action="store-subscriber" method="POST" className="subscription-form">
                                    <input type="email" placeholder="Enter Your Email Address" name="email_id"/>
                                    <button type="submit" className="main-btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="newsletter-shapes">
                <img className="shape-one" src={`${ImagesData.image56}`} alt="shape"/>
                <img className="shape-two" src={`${ImagesData.image57}`} alt="shape"/>
            </div>
        </section>
        {/* <!--====== End Newsletter ======--> */}

        {/* <!--====== Start Testimonial ======--> */}
        <section className="testimonial-area-two pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="testimonial-img-two mb-40">
                            <img src={`${ImagesData.image58}`} alt="image"/>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="testimonial-two-content">
                            <div className="section-title mb-25">
                                <h2>What say Client&#039;s About Our Top Services</h2>
                            </div>
                            <div className="testimonial-two-active mt-35">
                                <div className="testimonial-two-item">
                                    <div className="author">
                                        <img src={`${ImagesData.image59}`} alt="client"/>
                                        <div className="description">
                                            <h6>Harry Potter</h6>
                                            <span>Actor</span>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div>
                                <div className="testimonial-two-item">
                                    <div className="author">
                                        <img src={`${ImagesData.image60}`} alt="client"/>
                                        <div className="description">
                                            <h6>Mark Wiens</h6>
                                            <span>Food Blogger</span>
                                        </div>
                                    </div>

                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div>
                                <div className="testimonial-two-item">
                                    <div className="author">
                                        <img src={`${ImagesData.image61}`} alt="client"/>
                                        <div className="description">
                                            <h6>Mary Com</h6>
                                            <span>CEO</span>
                                        </div>
                                    </div>

                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div>
                                <div className="testimonial-two-item">
                                    <div className="author">
                                        <img src={`${ImagesData.image62}`} alt="client"/>
                                        <div className="description">
                                            <h6>John Doe</h6>
                                            <span>Teacher</span>
                                        </div>
                                    </div>

                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial-shapes">
                <img className="shape-one" src={`${ImagesData.image63}`} alt="shape"/>
                <img className="shape-two" src={`${ImagesData.image64}`} alt="shape"/>
            </div>
        </section>
        {/* <!--====== End Testimonial ======--> */}

        {/* <!--====== Start Blog ======--> */}
        <section className="blog-area-two pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-60">
                            <h2>Read Our Blog Post</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6">
                        <div className="blog-item-two">
                            <div className="image">
                                <a href="blog-details.html">
                                    <img src={`${ImagesData.image65}`} alt="image"/>
                                </a>
                            </div>

                            <div className="content">
                                <ul className="post-meta">
                                    <li><i className="far fa-user"></i>Alex</li>
                                    <li><i className="far fa-calendar-alt"></i>May 4, 2023</li>
                                    <li><a href="blogs.html" className="blog-category"><i className="far fa-th-large"></i>Design</a></li>
                                </ul>
                                <h4>
                                    <a href="blog-details.html">
                                        What is UX writing and what does a UX writer do?
                                    </a>
                                </h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter...
                                </p>
                                <a href="blog-details.html" className="btn-link">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="blog-item-two">
                            <div className="image">
                                <a href="blog-details.html">
                                    <img src={`${ImagesData.image66}`} alt="image"/>
                                </a>
                            </div>

                            <div className="content">
                                <ul className="post-meta">
                                    <li><i className="far fa-user"></i>John</li>
                                    <li><i className="far fa-calendar-alt"></i>June 2, 2023</li>
                                    <li><a href="blogs.html" className="blog-category"><i className="far fa-th-large"></i>Laravel</a></li>
                                </ul>
                                <h4>
                                    <a href="blog-details.html">
                                        How to Design a Website in 2022 - (a Beginner's Guide)
                                    </a>
                                </h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter...
                                </p>
                                <a href="blog-details.html" className="btn-link">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="blog-item-two">
                            <div className="image">
                                <a href="blog-details.html">
                                    <img src={`${ImagesData.image67}`} alt="image"/>
                                </a>
                            </div>

                            <div className="content">
                                <ul className="post-meta">
                                    <li><i className="far fa-user"></i>Maria</li>
                                    <li><i className="far fa-calendar-alt"></i>Aug 4, 2023</li>
                                    <li><a href="blogs.html" className="blog-category"><i className="far fa-th-large"></i>Tech</a></li>
                                </ul>
                                <h4>
                                    <a href="blog-details.html">
                                        Guide: How to Find a Web Designer in 2023?
                                    </a>
                                </h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter...
                                </p>
                                <a href="blog-details.html" className="btn-link">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-btn text-center mt-30">
                    <a href="blogs.html" className="main-btn">All Posts</a>
                </div>
            </div>
        </section>
        {/* <!--====== End Blog ======--> */}

        {/* <!--====== Start Client Logo ======--> */}
        <div className="client-logo-two pb-120">
            <div className="container">
                <div className="client-logo-two-active">
                    <div className="logo-two-item text-center">
                        <a href="404.html" target="_blank">
                            <img src={`${ImagesData.image68}`} alt="partner"/>
                        </a>
                    </div>
                    <div className="logo-two-item text-center">
                        <a href="404.html" target="_blank">
                            <img src={`${ImagesData.image69}`} alt="partner"/>
                        </a>
                    </div>
                    <div className="logo-two-item text-center">
                        <a href="404.html" target="_blank">
                            <img src={`${ImagesData.image70}`} alt="partner"/>
                        </a>
                    </div>
                    <div className="logo-two-item text-center">
                        <a href="404.html" target="_blank">
                            <img src={`${ImagesData.image71}`} alt="partner"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--====== End Client Logo ======--> */}

    
    
    </>
  )
}

export default Home