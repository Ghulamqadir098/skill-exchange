import React, { useState, useRef } from "react";
import ImagesData from "../../assets/images/signup_images.json";
import { NavLink } from "react-router-dom";
import JoditEditor from "jodit-react";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from 'react';
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// import ExchangeHandler from './ExchangeHandler'

function Create_Exchange() {
    const editor = useRef(null);
    // const [content, setContent] = useState("");
    // const [title, setTitle] = useState("");
    const [myskills, setMySkills] = useState("");
    const [all_skills, setAllSkills] = useState("");

    // const [myskillspost, setMySkillsPost] = useState("");
    // const [all_skillspost, setAllSkillsPost] = useState("");
    const { authenticated_user} = useContext(AuthContext);
    const user_id = authenticated_user.id;
   
   








    const [formData, setFormData] = useState({

        title: '',
        myskillspost: '',
        all_skillspost:'',
        // other user data fields
    });
    const [file, setFile] = useState(null);
    const[content,setContent]=useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };




    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }
        data.append('featured_image', file);
        data.append('user_id',user_id);
        data.append('content',content) ;
        try {
            const response = await axios.post('http://localhost:8000/api/create-exchange', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Exchange Created successfuly",
                showConfirmButton: false,
                timer: 2000,
            });
navigate('/');
        } catch (error) {

            Swal.fire({
                position: "center",
                icon: "danger",
                title: "There was an error in Creating Exchange!"+error,
                showConfirmButton: false,
                timer: 2000,
            });

            console.error('Error uploading data:', error);
        }
    };



   
    const navigate =useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            // alert(token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            axios
                .get("/api/get_skills")
                .then((response) => {
                    console.log(response.data.skills);
                    console.log(response.data.all_skills);

                    const skills = response.data.skills;
                    const all_skills = response.data.all_skills;
                    // Sort skills alphabetically by name
                    all_skills.sort((a, b) => a.name.localeCompare(b.name));

                    // Set the sorted skills to the state
                    setAllSkills(all_skills);
                    // Sort skills alphabetically by name

                    skills.sort((a, b) => a.name.localeCompare(b.name));
                    // Set the sorted skills to the state
                    setMySkills(skills);
                })
                .catch((error) => {
                    console.error("Error getting skills", error);
                });
        }
    }, []);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post(
    //             "http://localhost:8000/api/create-exchange",
    //             {
    //                 user_id,
    //                 title,
    //                 content,
    //                 myskillspost,
    //                 all_skillspost,
    //             }
    //         );
    //         Swal.fire({
    //             position: "center",
    //             icon: "success",
    //             title: "Exchange was successfully Created",
    //             showConfirmButton: false,
    //             timer: 2000,
    //         });

    //         navigate("/");
    //     } catch (error) {
    //         console.error("There was an error in Creating Exchange!", error);
    //         Swal.fire({
    //             position: "center",
    //             icon: "danger",
    //             title: "There was an error in Login!" + error,
    //             showConfirmButton: false,
    //             timer: 2000,
    //         });
    //     }
    // };

    return (
        <>
            {/* <!--====== Start breadcrumbs ======--> */}
            <section
                class="breadcrumbs-area bg_cover bg-img"
                data-bg-img={`${ImagesData.image1}`}
            >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="breadcrumbs-title">
                                <h1>Exchange</h1>
                                <ul class="breadcumb-link">
                                    <li>
                                        <NavLink to={"/"}>Home</NavLink>
                                    </li>
                                    <li class="active">Exchange</li>
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
                                        <label>Title *</label>
                                        <input
                                            type="text"
                                            placeholder="I will do something for you in exchange for something I need help with"
                                            class="form_control"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                        />
                                        
                                    </div>


                                    <div class="form_group">
                                        <label>Featured Image *</label>
                                        <input
                                            type="file"
                                            class="form_control"
                                            name="featured_image"
                                            onChange={handleFileChange}
                                        />
                                        
                                    </div>

                                    <div class="form_group">
                                        <label>Offering Skill *</label>
                                        <select
                                            name="myskillspost"
                                            id="skill"
                                            value={formData.myskillspost}
                                            onChange={handleInputChange}
                                        >

                                            {Array.isArray(myskills) &&
                                            myskills.length > 0 ? (
                                                myskills.map((skill) => (
                                                    <option
                                                        key={skill.id}
                                                        value={skill.id}
                                                    >
                                                        {skill.name}
                                                    </option>
                                                ))
                                            ) : (
                                                <option value="" disabled>
                                                    No skills available
                                                </option>
                                            )}

                                            {/* {myskills.map((skill) => (
                                         <option key={skill.id} value={skill.id}>
                                             {skill.name}
                                         </option>
                                     ))} */}
                                        </select>
                                    </div>

                                    <div class="form_group">
                                        <label>Required Skill *</label>
                                        <select
                                            name="all_skillspost"
                                            id="required_skill"
                                            value={formData.all_skillspost}
                                            onChange={handleInputChange}
                                        >
                                            {Array.isArray(all_skills) &&
                                            all_skills.length > 0 ? (
                                                all_skills.map((skill) => (
                                                    <option
                                                        key={skill.id}
                                                        value={skill.id}
                                                    >
                                                        {skill.name}
                                                    </option>
                                                ))
                                            ) : (
                                                <option value="" disabled>
                                                    No skills available
                                                </option>
                                            )}

                                            {/* {myskills.map((skill) => (
                                         <option key={skill.id} value={skill.id}>
                                             {skill.name}
                                         </option>
                                     ))} */}
                                        </select>
                                    </div>

                                    <div class="form_group">
                                        <label>
                                            Write Down the Details in Easy to
                                            Read and Creative Way*
                                        </label>
                                        {/* <textarea name="details"  class="form_control" id="editor"></textarea> */}
                                        <JoditEditor
                                        name={"content"}
                                            useRef={editor}
                                            value={content}
                                            onChange={(newContent) =>
                                                setContent(newContent)
                                            }
                                        
                                        />
                                    </div>
                                    {/* <div class="form_checkbox d-flex align-items-center">
                                     <input type="checkbox" name="checkbox1" id="checkbox1" />
                                     <label for="checkbox1"><span>I agree with Prohire's <a href="terms-conditions.html">Terms & Conditions</a></span></label>
                                 </div> */}
                                    <div class="form_group">
                                        <button type="submit" class="main-btn">
                                            Create Exchange
                                        </button>
                                    </div>
                                </form>

                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--====== user-area-section part End ======--> */}
        </>
    );
}

export default Create_Exchange;
