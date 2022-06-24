const UserDetail = () => {

    return (
        <div>
            <div className="mainDashboard side_dashboard_container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="dashboardHeading arrowbefore">
                            <img src="/assets/images/Icon ionic-ios-arrow-back.svg" alt="" />
                            <h2>User Details</h2>
                        </div>
                    </div>
                </div>
                <div className="users-table set3">
                    <div className="users-table-container set-5">
                        <div className="user-table-head setUD">
                            <div className="userHeading setUserDeatils">
                                <div><img src="/assets/images/User Detail Image.png" alt="" /></div>
                                <div className='detailCtn'>
                                    <h4>Full Name</h4>
                                    <h3>Mathew Johnson</h3>
                                </div>
                            </div>
                        </div>
                        <div className="therapist_detail setUserDetails">
                            <div className="therapist_list">
                                <h3>Email</h3>
                                <p>mathewjohnson@gmail.com</p>
                            </div>
                            <div className="therapist_list">
                                <h3>Phone Number</h3>
                                <p>(859)129-2962</p>
                            </div>
                            <div className="therapist_list">
                                <h3>Password</h3>
                                <p>********</p>
                            </div>
                            <div className="userDetailSec">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;