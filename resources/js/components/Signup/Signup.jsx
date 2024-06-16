import React, { useState } from "react";
// import  useHistory  from 'react-router-dom';
import { createBrowserHistory } from "@remix-run/router";
import ImagesData1 from "../../assets/images/signup_images.json";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";
function Signup() {
    const [user_name, SetUserName] = useState("");
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [profile_image, SetProfileImage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/api/register",
                {
                    name,
                    user_name,
                    email,
                    password,
                    profile_image,
                }
            );
            // alert('Registration successful. Token: ' + response.data.token);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration successful",
                showConfirmButton: false,
                timer: 2000,
            });

            navigate("/");
        } catch (error) {
            console.error("There was an error registering!", error);
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
                                            value={name}
                                            onChange={(e) =>
                                                SetName(e.target.value)
                                            }
                                            class="form_control"
                                        />
                                    </div>

                                    <div class="form_group">
                                        <label>Username *</label>
                                        <input
                                            type="text"
                                            value={user_name}
                                            onChange={(e) =>
                                                SetUserName(e.target.value)
                                            }
                                            class="form_control"
                                        />
                                    </div>
                                    <div class="form_group">
                                        <label>Email address *</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) =>
                                                SetEmail(e.target.value)
                                            }
                                            class="form_control"
                                        />
                                    </div>
                                    <div class="form_group">
                                        <label>Password *</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) =>
                                                SetPassword(e.target.value)
                                            }
                                            class="form_control"
                                        />
                                    </div>
                                    <div class="form_group">
                                        <label>Profile Image *</label>
                                        <input
                                            type="file"
                                            value={profile_image}
                                            onChange={(e) =>
                                                SetProfileImage(e.target.value)
                                            }
                                            class="form_control"
                                        />
                                    </div>

                                    {/* <div class="form_checkbox d-flex align-items-center">
                                    <input type="checkbox" name="checkbox1" id="checkbox1" />
                                    <label for="checkbox1"><span>I agree with Prohire's <a href="terms-conditions.html">Terms & Conditions</a></span></label>
                                </div> */}
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
