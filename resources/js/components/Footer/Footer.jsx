import React from 'react'
import ImagesData from '../../assets/images/images.json'
function Footer() {
  return (
    <>
    
    
    {/* <!--====== Start Footer ======--> */}
        <footer className="footer-area-v1 main-bg footer-two">
            <div className="footer-widget pt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="widget about-widget mb-40">
                                <img src={`${ImagesData.image72}`} alt="Image" />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et est sapiente earum? Aut adipisci ipsam cumque voluptatibus hic in nostrum! Eveniet.</p>
                                <ul className="social-link">
                                    <li><a href="404.html" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
                                    <li><a href="404.html" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="404.html" target="_blank"><i className="fab fa-google"></i></a></li>
                                    <li><a href="404.html" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="widget useful-link-widget mb-40">
                                <h4 className="widget-title">Contact Us</h4>
                                <ul className="widget-link">
                                    <li><a href="terms-conditions.html">Conditions</a></li>
                                    <li><a href="terms-conditions.html">Terms of Use</a></li>
                                    <li><a href="services.html">Our Services</a></li>
                                    <li><a href="404.html">New Guests List</a></li>
                                    <li><a href="404.html">The Team List</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="widget contact-widget mb-40">
                                <h4 className="widget-title">Services</h4>
                                <ul className="contact-list">
                                    <li className="list">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="info">
                                            <p>
                                                2416 Mapleview Drive Tampa, FL 33634, Toronto
                                            </p>
                                        </div>
                                    </li>
                                    <li className="list">
                                        <div className="icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="info">
                                            <p><a href="tel:0029129102320">0029129102320</a></p>
                                            <p><a href="tel:0029129102320">0029129102320</a></p>
                                        </div>
                                    </li>
                                    <li className="list">
                                        <div className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="info">
                                            <p><a href="mailto:contact@website.com">contact@website.com</a></p>
                                            <p><a href="mailto:hello@website.com">hello@website.com</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="widget instagram-widget mb-40">
                                <h4 className="widget-title">Instagram</h4>
                                <ul className="instagram-list">
                                    <li>
                                        <a href="contact.html"><img className="rounded" src={`${ImagesData.image73}`} alt="Image" /></a>
                                    </li>
                                    <li>
                                        <a href="contact.html"><img className="rounded" src={`${ImagesData.image74}`} alt="Image" /></a>
                                    </li>
                                    <li>
                                        <a href="contact.html"><img className="rounded" src={`${ImagesData.image75}`} alt="Image" /></a>
                                    </li>
                                    <li>
                                        <a href="contact.html"><img className="rounded" src={`${ImagesData.image76}`} alt="Image" /></a>
                                    </li>
                                    <li>
                                        <a href="contact.html"><img className="rounded" src={`${ImagesData.image77}`} alt="Image" /></a>
                                    </li>
                                    <li>
                                        <a href="contact.html"><img className="rounded" src={`${ImagesData.image78}`} alt="Image" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="copyright-text">
                                <p>&copy; KreativDev 2023 | All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="copyright-link">
                                <ul>
                                    <li><a href="contact.html">Privacy</a></li>
                                    <li><a href="contact.html">Terms</a></li>
                                    <li><a href="contact.html">Sitemap</a></li>
                                    <li><a href="contact.html">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    
    
    
    
    
    </>
  )
}

export default Footer