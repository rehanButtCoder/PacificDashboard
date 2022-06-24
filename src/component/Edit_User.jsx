const Edit_User = () => {
    return (
        <div className="mainDashboard side_dashboard_container">
            <div className="row">
                <div className="col-md-12">
                    <div className="dashboardHeading arrowbefore">
                        <img src="/assets/images/Icon ionic-ios-arrow-back.svg" alt="" />
                        <h2>Edit User</h2>
                    </div>
                </div>
            </div>
            <div className="users-table set3">
                <div className="users-table-container">
                    <div className="user-table-head">
                        <div className="userHeading">
                            <h2>User Details</h2>
                        </div>
                    </div>
                    <div className="user_img">
                        <img src="/assets/images/user Detail Image1.png" alt="" />
                    </div>
                    <form className="form-login set2">
                        <div className="therapist_category userImg1 useralignmnt">
                            <input type="text" name="uname" placeholder="Mathew Johnson" />
                            {/* <img src="/assets/images/EditUser/ProfileIcon.png" alt="" /> */}
                        </div>
                        <div className="therapist_name userImg2 useralignmnt">
                            <input type="text" name="uname" placeholder="mathewjohnson@gmail.com" />
                        </div>
                        <div className="therapist_category userImg3 useralignmnt">
                            <input type="text" name="uname" placeholder="(859)129-2962" />
                        </div>
                    </form>
                    <form className="form-login set2 setlesson useralignmnt">
                        <div className="therapist_category userImg4">
                            <input type="password" name="uname" placeholder="********" />
                        </div>
                        <div className="therapist_category userImg5 set6 useralignmnt">
                            <input type="password" name="uname" placeholder="********" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="buttonSet">
                <a className="bttn setb" href="">Cancel</a>
                <a className="bttn bttn-bg" href="">Update</a>
            </div>
        </div>
    );
}

export default Edit_User;