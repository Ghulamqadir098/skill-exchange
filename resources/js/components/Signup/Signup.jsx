import React from 'react'
import ImagesData from '../../assets/images/signup_images.json'
function Signup() {
  return (
   <>
   
   {/* <!--====== Start breadcrumbs ======--> */}
        <section class="breadcrumbs-area bg_cover bg-img" data-bg-img={`${ImagesData.image1}`}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="breadcrumbs-title">
                            <h1>Signup</h1>
                            <ul class="breadcumb-link">
                                <li><a href="index.html">Home</a></li>
                                <li class="active">Signup</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--====== End breadcrumbs ======--> */}

        {/* <!--====== user-area-section part Start ======--> */}
        <div class="user-area-section pt-120 pb-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="user-form">
                            <form action="#">

                            <div class="form_group">
                                    <label>Full Name *</label>
                                    <input type="text" class="form_control" />
                                </div>

                                <div class="form_group">
                                    <label>Username *</label>
                                    <input type="text" class="form_control" />
                                </div>
                                <div class="form_group">
                                    <label>Email address *</label>
                                    <input type="email" class="form_control" />
                                </div>
                                <div class="form_group">
                                    <label>Password *</label>
                                    <input type="password" class="form_control" />
                                </div>
                                {/* <div class="form_checkbox d-flex align-items-center">
                                    <input type="checkbox" name="checkbox1" id="checkbox1" />
                                    <label for="checkbox1"><span>I agree with Prohire's <a href="terms-conditions.html">Terms & Conditions</a></span></label>
                                </div> */}
                                <div class="form_group">
                                    <button type="submit" class="main-btn">Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--====== user-area-section part End ======--> */}


   </>
  )
}

export default Signup