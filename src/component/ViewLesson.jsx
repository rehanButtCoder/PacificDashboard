const ViewLesson = () => {

    return (
        <div>
            <div className="mainDashboard side_dashboard_container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="dashboardHeading arrowbefore">
                            <img src="/assets/images/Icon ionic-ios-arrow-back.svg" alt="" />
                            <h2>View Lesson</h2>
                        </div>
                    </div>
                </div>
                <div className="users-table set3">
                    <div className="users-table-container set-4">
                        <div className="user-table-head setTH">
                            <div className="userHeading">
                                <h2>Lesson Information</h2>
                            </div>
                            <div className='btn setbtn'>
                                <img src="/assets/images/View Password.svg" alt="" />
                                <a href="#">View Video</a>
                            </div>
                        </div>
                        <div className="therapist_detail">
                            <div className="therapist_list">
                                <h3>Lesson Title</h3>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="therapist_list">
                                <h3>Lesson Category</h3>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="therapist_list setl">
                                <h3>File Type</h3>
                                <div><img src="/assets/images/lessons/fileType.png" alt="" /></div>
                            </div>
                            <div className="therapist_list">
                                <h3>Description</h3>
                                <p>Healthy Lifestyle Training</p>
                            </div>
                            <div className="lesson_mtySec">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewLesson;