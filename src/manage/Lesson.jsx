import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { get } from '../Services/Lessons';
import Loader from '../component/Loader';

const Lesson = () => {

    const dropDown = (e) => {
        document.querySelectorAll(".actionContent").forEach(item => {
            if (e.target.closest(".actionContent") === item) {
                item.classList.toggle("block")
            } else {
                item.classList.remove("block")
            }
        })
    }

    const [lessonVal, setlessonVal] = useState()

    const getLessons = async () => {
        const response = await get();
        console.log(response)
        setlessonVal(response.data.data)
    }

    useEffect(() => {
        getLessons()
    }, [])

    const customStyles = {
        headCells: {
            style: {
                fontSize: '14px',
                fontWeight: '400',
                color: '#B1B1B1',
                backgroundColor: '#07396C'
            },
        },
        cells: {
            style: {
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '400',
                backgroundColor: '#04305D'
                , paddingBottom: '20px'
            },
        },
        headRow: {
            style: {
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '400',
                border: 'none !important',
                // paddingBottom : '15px'
            },
        },
    };
    const columns = [
        {
            name: 'Lesson ID',
            selector: row => row.lessonId,
        },
        {
            name: 'Video',
            button: true,
            cell: (row) => (
                <div>
                    <div className='user-item'>
                        <img className='lessonImg' src={row.videoThumbnail} alt="" />
                    </div>
                </div>
            )
        },
        {
            name: 'Video Title',
            selector: row => row.videoTitle,
        },
        {
            name: 'Days',
            selector: row => row.dayNumber,
        },
        {
            name: 'Duration',
            selector: row => row.duration,
        },
        {
            name: 'Type',
            button: true,
            cell: (row) => (
                <div>
                    <div className='user-item'>
                        <img src="/assets/images/lessons/fileType.png" alt="" />
                    </div>
                </div>
            )
        },
        {
            name: 'Action',
            button: true,
            cell: (row) => (
                <div>
                    <div className='actionContent'>
                        <img className='img1' onClick={(e) => dropDown(e)} src="/assets/images/More.svg" alt="" />
                        <div className="dropdown">
                            <div className="dropdown-content">
                                <Link to={`/manage-lesson/edit-lesson/${row.lessonId}`}>Edit</Link>
                                <Link to=''>Delete</Link>
                                <Link to=''>View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];


    return (
        <div className="dashboard-user side_dashboard_container">
            <div className="row">
                <div className="col-md-12">
                    <div className="dashboardHeading setting">
                        <h2>Manage Lessons</h2>
                        <Link className='btn' to="/manage-lesson/add-lessons">Add</Link>
                    </div>

                </div>
            </div>
            <div className="users-table">
                <div className="users-table-container">
                    <div className="user-table-head">
                        <div className="userHeading">
                            <h2>Lesson Lists</h2>
                        </div>
                        <div className="user-table-filter">
                            <img src="/assets/images/Filter Icon.png" alt="" />
                            <span className="filter">Filter</span>
                        </div>
                    </div>
                    <div className='user-table-body'>
                        {(lessonVal ? <DataTable
                            columns={columns}
                            data={lessonVal}
                            customStyles={customStyles}
                            pagination
                        /> : <Loader />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lesson;