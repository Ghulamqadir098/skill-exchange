import React, { useEffect, useState } from 'react'
import ImagesData from '../../assets/images/abc.jpg'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
function ExchangeView() {
  const {id}=useParams();
  const[exchange, setExchange] = useState([]);
const formattedDate=exchange.updated_at?format(parseISO(exchange.updated_at),'MMMM do, yyyy'):
'Date not available';


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        // alert(token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
         axios
            .get(`/api/single_exchange/${id}`)
            .then((response) => {
          
          
                console.log(response.data.exchange);
                setExchange(response.data.exchange);
                
            })
            .catch((error) => {
                console.error("Error fetching Exchange Details", error);
                Swal.fire({
                    position: "center",
                    icon: "danger",
                    title: "There was an error in Login!"+error,
                    showConfirmButton: false,
                    timer: 2000,
                });
            });
    }


}, [id]);



  
    return (
    <>
    
    
    {/* <!--====== Start breadcrumbs ======--> */}
        <section class="breadcrumbs-area bg_cover bg-img" data-bg-img={ImagesData} style={{backgroundImage: `url(${ImagesData})` }}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="breadcrumbs-title">
                            <h1>Blog Details</h1>
                            <ul class="breadcumb-link">
                                <li>
                                    <NavLink
                                    to={'/'}
                                    >
Home
                                    </NavLink>
                    </li>
                                <li class="active">Blog Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--====== End breadcrumbs ======--> */}

        {/* <!--====== Start Blog Details Section ======--> */}
        <div class="blog-details-section pt-120 pb-90">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="blog-details-wrapper mb-30">
                            <div class="blog-post-item">
                                <div class="post-thumbnail">
                                    <img src={`/storage/${exchange.featured_image}`} alt="Service Single" />
                                </div>
                                <div class="entry-content">
                                    <div class="post-meta">
                                        <ul>
                                            <li><span><i class="far fa-calendar-alt"></i><a href="blogs.html">{formattedDate}</a></span></li>
                                            <li><span><i class="far fa-comment"></i><a href="blogs.html">Comment (5k)</a></span></li>
                                        </ul>
                                    </div>
                       <div dangerouslySetInnerHTML={{__html:exchange.details}}>



                       </div>
                                    <div class="blog-share">
                                        <ul class="social-link">
                                            <li><a href="404.html" class="facebook"><i class="fab fa-facebook-f"></i>Share</a></li>
                                            <li><a href="404.html" class="twitter"><i class="fab fa-twitter"></i>Tweet</a></li>
                                            <li><a href="404.html" class="linkedin"><i class="fab fa-linkedin-in"></i>Linkedin</a></li>
                                        </ul>
                                    </div>

                                    <div class="comment-form mt-30">
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form_group mb-20">
                                                        <input type="text" class="form_control" placeholder="Name" name="name" required />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form_group mb-20">
                                                        <input type="email" class="form_control" placeholder="Email" name="email" required />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form_group mb-20">
                                                        <textarea name="message" rows="6" class="form_control" placeholder="Comment"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <button class="main-btn">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="sidebar-widget-area">
                            <div class="widget search-widget mb-30">
                                <form>
                                    <div class="form_group">
                                        <input type="search" class="form_control" placeholder="Search Template" required />
                                        <button class="search-btn"><i class="fas fa-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div class="widget categories-widget mb-30">
                                <h4 class="widget-title">Categories</h4>
                                <ul class="widget-link">
                                    <li><a href="blogs.html">Travel <span>10</span></a></li>
                                    <li><a href="blogs.html">Lifestyle <span>05</span></a></li>
                                    <li><a href="blogs.html">Design <span>10</span></a></li>
                                    <li><a href="blogs.html">Technology <span>03</span></a></li>
                                    <li><a href="blogs.html">Business <span>02</span></a></li>
                                </ul>
                            </div>
                            <div class="widget widget-tag-cloud mb-30">
                                <h4 class="widget-title">Popular Tags</h4>
                                <a href="blogs.html">HTML</a>
                                <a href="blogs.html">WordPress</a>
                                <a href="blogs.html">PSD</a>
                                <a href="blogs.html">CMS</a>
                                <a href="blogs.html">LMS</a>
                                <a href="blogs.html">Adobe XD</a>
                                <a href="blogs.html">Portfolio</a>
                                <a href="blogs.html">Corporate</a>
                            </div>
                            <div class="widget add-widget mb-30 text-center">
                                <h3 class="mb-15">Premium Quality Template</h3>
                                <img src="assets/images/add-1.png" alt="add" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--====== End Blog Details Section ======--> */}

    </>
  )
}

export default ExchangeView