import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { get } from '../Services/Users';
import Loader from '../component/Loader';

const User = () => {

    const dropDown = (e) => {
        document.querySelectorAll(".actionContent").forEach((item)=>{
            if(e.target.closest(".actionContent") === item){
                item.classList.toggle("block");
            }else{
                item.classList.remove("block");
            }
        })

    }

    const [userData, setUserData] = useState()
    useEffect(() => {
        UserApiFunc()
    }, [])

    const UserApiFunc = async () => {
        const userResp = await get();
        setUserData(userResp.data.data)
    }

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
            },
        },
        headRow: {
            style: {
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '400',
                border: 'none !important'
            },
        },
    };

    const columns = [
        {
            name: 'User ID',
            button: true,
            cell: (row) => (
                <div>
                    <div className='user-item flexing'>
                        <img className='userImg' src={row.profilePicture} alt="" />
                        <span>{row.fullName}</span>
                    </div>
                </div>
            ),
            width: "200px",
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Phone',
            selector: row => row.phoneNumber,
        },
        {
            name: 'Case Manager',
            selector: row => row.fullName,
        },
        {
            name: 'Therapist',
            selector: row => row.therapist,
        },
        {
            name: 'Action',
            button: true,
            cell: (row) => (
                <div className='actionContent'>
                    <img className='img1' onClick={(e) => dropDown(e)} src="/assets/images/More.svg" alt="" />
                    <div className="dropdown">
                        <div className="dropdown-content">
                            <Link to=''>Edit</Link>
                            <Link to=''>Delete</Link>
                            <Link to=''>View</Link>
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
                    <div className="dashboardHeading">
                        <h2>Manage Users</h2>
                    </div>
                </div>
            </div>
            <div className="users-table">
                <div className="users-table-container">
                    <div className="user-table-head">
                        <div className="userHeading">
                            <h2>Users Lists</h2>
                        </div>
                        <div className="user-table-filter">
                            <img src="/assets/images/Filter Icon.png" alt="" />
                            <span className="filter">Filter</span>
                        </div>
                    </div>
                    <div className='user-table-body'>
                        {
                            (userData ? <DataTable
                                columns={columns}
                                data={userData}
                                customStyles={customStyles}
                                pagination
                            /> : <Loader />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;