import React, { useState } from "react";
// import  useHistory  from 'react-router-dom';
import ImagesData1 from "../../assets/images/signup_images.json";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";

function Signup() {
  
    const [formData, setFormData] = useState({
        name: '',
        user_name:'',
        email: '',
        password:'',
        // other user data fields
    });
    const [file, setFile] = useState(null);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }
        data.append('profile_image', file);

        try {
            const response = await axios.post('http://localhost:8000/api/register', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration successful",
                showConfirmButton: false,
                timer: 2000,
            });
navigate('/');
        } catch (error) {
            console.error('Error uploading data:', error);
        }
    };

    return (
        <>
            {/* <!--====== Start breadcrumbs ======--> */}
            <section
                class="breadcrumbs-area bg_cover bg-img"
                data-bg-img={`${ImagesData1.image1}`}
                style={{
                    backgroundImage: `url(${ImagesData1.image1})`,
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="breadcrumbs-title">
                                <h1>Signup</h1>
                                <ul class="breadcumb-link">
                                    <li>
                                        <NavLink to={"/"}>Home</NavLink>
                                    </li>
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
                                <form onSubmit={handleSubmit}>
                                    <div class="form_group">
                                        <label>Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            class="form_control"
                                        />
                                    </div>

                                    <div class="form_group">
                                        <label>Username *</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            value={formData.user_name}
                                            onChange={handleInputChange}
                                            class="form_control"
                                        />
                                    </div>
                                    <div class="form_group">
                                        <label>Email address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            class="form_control"
                                        />
                                    </div>
                                    <div class="form_group">
                                        <label>Password *</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            class="form_control"
                                        />
                                    </div>
                                    <div class="form_group">
                                        <label>Profile Image *</label>
                                        <input
                                            type="file"
                                            name="profile_image"
                                            onChange={handleFileChange}
                                            class="form_control"
                                        />
                                    </div>


                                    <div class="form_group">
                                        <button type="submit" class="main-btn">
                                            Create Account
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--====== user-area-section part End ======--> */}
        </>
    );
}

export default Signup;
