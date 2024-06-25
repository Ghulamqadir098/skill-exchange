import React from 'react'
import Swal from "sweetalert2";
import ImagesData from '../../assets/images/abc.jpg'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import { useState,useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';
function Login() {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
             await login({email, password});
            //  localStorage.setItem('token', response.data.access_token);
            // alert('Registration successful. Token: ' + response.data.token);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login successful",
                showConfirmButton: false,
                timer: 2000,
            });

            navigate("/");
        } catch (error) {
            console.error("There was an error in Login!", error);
            Swal.fire({
                position: "center",
                icon: "danger",
                title: "There was an error in Login!"+error,
                showConfirmButton: false,
                timer: 2000,
            });

        }
    };


  return (
    <>
   
    {/* <!--====== Start breadcrumbs ======--> */}
         <section class="breadcrumbs-area bg_cover bg-img" data-bg-img={ImagesData} style={{backgroundImage: `url(${ImagesData})` }}>
             <div class="container">
                 <div class="row">
                     <div class="col-lg-6">
                         <div class="breadcrumbs-title">
                             <h1>Login</h1>
                             <ul class="breadcumb-link">
                                 <li>

<NavLink to={"/"}>

Home
</NavLink>

                                 </li>
                                 <li class="active">Login</li>
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
                             <form onSubmit={handleSubmit}>
                                 <div class="form_group">
                                     <label>Email address *</label>
                                     <input type="email" 
                                     

                                     value={email}
                                     onChange={(e) =>
                                         SetEmail(e.target.value)
                                     }


                                     class="form_control" />
                                 </div>
                                 <div class="form_group">
                                     <label>Password *</label>
                                     <input type="password" 
                                     
                                     
                                     value={password}
                                     onChange={(e) =>
                                         SetPassword(e.target.value)
                                     }
                                     
                                     class="form_control" />
                                 </div>
                                 {/* <div class="form_checkbox d-flex align-items-center">
                                     <input type="checkbox" name="checkbox1" id="checkbox1" />
                                     <label for="checkbox1"><span>I agree with Prohire's <a href="terms-conditions.html">Terms & Conditions</a></span></label>
                                 </div> */}
                                 <div class="form_group">
                                     <button type="submit" class="main-btn">Login</button>
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

export default Login