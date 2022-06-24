import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import { addLesson, uploadFile } from '../Services/Lessons';
import { useForm } from "react-hook-form";
import QuestionsSection from './Questions_section';
import Swal from 'sweetalert2'

const Add_Lessons = () => {
    const Swal = require('sweetalert2')


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [picture, setPicture] = useState()
    const [imgData, setImgData] = useState()

    const imagesPreview = (e) => {
        if (e.target.files[0]) {
            // console.log("picture: ", e.target.files)
            setPicture(e.target.files[0])
            const reader = new FileReader();
            reader.onload = function (e) {
                // The file's text will be printed here
                // console.log(e.target.result)
                setImgData(true)
            };
            reader.readAsDataURL(e.target.files[0])
        } else {
            setImgData(false)
        }
    }

    const [questions, setQuestions] = useState([])

    const onSubmit1 = async (formData) => {
        debugger
        const data = {
            dayNumber: formData.dayNumber,
            videoPath: "",
            videoThumbnail: formData.thumbnail,
            videoTitle: formData.videoTitle,
            duration: "00:00:42",
            lessonDescription: formData.lessonDescription,
            lessonAssessmentQuestions: questions
        }

        const formData3 = new FormData();
        // append k sath key aty ha jo api meh sath bejy hoty idr empty h
        formData3.append("", picture);
        const imageResponse3 = await uploadFile(formData3);
        data.videoPath = imageResponse3.data.data.url;

        const response = await addLesson(data)
        if (response.data.code === 1) {

        }

        Swal.fire({
            title: 'Done!',
            text: 'Lesson Added',
            // icon: 'swal2-icon-show',
            confirmButtonText: 'OK'
        })
    }
    let y = 0;

    const deleteQ = (item) => {
        // debugger
        console.log(item)
        const delQ = questions.filter((x) => {
            return x.id !== item
        })
        setQuestions(delQ)
    }

    return (
        <div className="mainDashboard side_dashboard_container">
            <form onSubmit={handleSubmit(onSubmit1)}>
                <div className="row">
                    <div className="col-md-12">
                        <Link className="dashboardHeading arrowbefore" to="/manage-lesson">
                            <img src="/assets/images/Icon ionic-ios-arrow-back.svg" alt="" />
                            <h2>Add Lesson</h2>
                        </Link>
                    </div>
                </div>
                <div className="users-table set3">
                    <div className="users-table-container">
                        <div className="user-table-head">
                            <div className="userHeading">
                                <h2>Lesson Details</h2>
                            </div>
                        </div>

                        <div className="form-login set2 setlesson">
                            <div className="therapist_category">
                                <input autocomplete="off" type="text" name="uname" placeholder="Lesson Name" />
                            </div>
                            <div className="therapist_name setLessonLogo">
                                <input autocomplete="off" type="text" name="uname" placeholder="Video Thumbnail" {...register("thumbnail", { required: true })} />
                            </div>
                            <div className="therapist_name setLessonLogo">
                                <input autocomplete="off" type="text" name="uname" placeholder="Day Number" {...register("dayNumber", { required: true })} />
                            </div>
                        </div>

                        <div className="lessonDescr">
                            <textarea autocomplete="off" name="comment" form="usrform" placeholder="Description" {...register("lessonDescription", { required: true })} ></textarea>
                        </div>
                        {/* upload video btns */}
                        <div className="user-table-head">
                            <div className="userHeading">
                                <h2>Upload Lesson Detail's</h2>
                            </div>
                        </div>
                        <div className="therapist_category questionI">
                            <input autocomplete="off" type="text" name="uname" placeholder="Video Title" {...register("videoTitle", { required: true })} />
                        </div>
                        <div className="lessonDetailsBtn">
                            <div className='hiddenField'>
                                <label htmlFor="v" />
                                <input accept=".mp4" id="v" type="file" onChange={imagesPreview} />

                                {imgData ? <img className='sizeSet' src='/assets/images/tick1.png' alt='' /> : ""}
                            </div>
                            <button className='uploadBtn'><img src="/assets/images/Upload Video Icon.svg" alt="" /></button>
                        </div>
                    </div>
                </div>

                <QuestionsSection setdata={setQuestions} data={questions} />

                <div className="users-table">
                    <div className="users-table-container">
                        <div className="user-table-head">
                            <div className="userHeading">
                                <h2>Assessment Question List</h2>
                            </div>
                        </div>
                        <div className='user-table-body'>
                            <div className='userAccess'>
                                <div className='accessHead'>
                                    <h4>ID</h4>
                                </div>
                                <div className='accessHead'>
                                    <h4>Assessment Question</h4>
                                </div>
                                <div className='accessHead'>
                                    <h4>Action</h4>
                                </div>
                            </div>
                            {questions.map((x) => {
                                return (
                                    <>
                                        <div style={{ backgroundColor: "#04305D" }} className='userAccess'>
                                            <div className='accessHead'>
                                                <h4 style={{ color: "white" }}>{y++}</h4>
                                            </div>
                                            <div className='accessHead'>
                                                <h4 style={{ color: "white" }}>{x.question}</h4>
                                            </div>
                                            <div className='accessHead'>
                                                <img onClick={() => { deleteQ(x.id) }} src="/assets/images/Dashboard/User List.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className='options-btn'>
                                            <Link to="" className='op-btn'>{x.option1}</Link>
                                            <Link to="" className='op-btn'>{x.option2}</Link>
                                            <Link to="" className='op-btn'>{x.option3}</Link>
                                            <Link to="" className='op-btn'>{x.option4}</Link>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="buttonSet">
                    <button className="bttn bttn-bg">Save</button>
                    <Link className="bttn setb" to="/manage-user">Cancel</Link>
                </div>
            </form>
        </div >
    );
}

export default Add_Lessons;