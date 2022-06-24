import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="Dashboard">
            <div class="sidenav">
                <div className="sidebar-container">
                    <div className="sidebar-img">
                        <img src="/assets/images/Dashboard/Pacific Shores Logo MASTER HIGH DEF.png" alt="" />
                    </div>
                    <div className="sidebar-icons">
                        <NavLink className="Color-icon" to="/">
                            <img src="/assets/images/Dashboard/Dashboard Icon.svg" className="sidebarIcon" alt="" />
                            <img className="sidebarIcons" src="/assets/images/Dashboard/Dashboard Color Icon.svg" alt="" />
                            <span className="ctnnn">Dashboard</span>
                        </NavLink>
                        <NavLink to="/manage-user">
                            <img className="sidebarIcon" src="/assets/images/Dashboard/User List.svg" alt="" />
                            <img className="sidebarIcons" src="assets/images/Dashboard/hoverIcons/User Icon1.svg" alt="" />
                            <span className="ctnnn">Users</span>
                        </NavLink>
                        <NavLink to="/manage-lesson">
                            <img className="sidebarIcon" src="/assets/images/Dashboard/Lessons.svg" alt="" />
                            <img className="sidebarIcons" src="/assets/images/Dashboard/hoverIcons/Leasons List1.svg" alt="" />
                            <span className="ctnnn">Lessons</span>
                        </NavLink>
                        <NavLink to="/manage-therapist">
                            <img className="sidebarIcon" src="/assets/images/Dashboard/Therapist.svg" alt="" />
                            <img className="sidebarIcons" src="/assets/images/Dashboard/hoverIcons/Therapist icon1.svg" alt="" />
                            <span className="ctnnn">Therapist</span>
                        </NavLink>
                        <NavLink to="/manage-case-manager">
                            <img className="sidebarIcon" src="/assets/images/Dashboard/Case manager.svg" alt="" />
                            <img className="sidebarIcons" src="/assets/images/Dashboard/hoverIcons/Manager List Color Icon1.svg" alt="" />
                            <span className="ctnnn">Manager</span>
                        </NavLink>
                        <NavLink className="manage-payments" to="/manage-payment">
                            <img className="sidebarIcon" src="/assets/images/Dashboard/manage payments.svg" alt="" />
                            <img className="sidebarIcons" src="/assets/images/Dashboard/hoverIcons/Payment icon1.svg" alt="" />
                            <span className="ctnnn">Payments</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="side_dashboard_container">
                <div className="Main_dash_icon">
                    <div><img src="/assets/images/Dashboard/search.png" alt="" /></div>
                    <div className="align"><img src="/assets/images/Dashboard/notifications.png" alt="" />
                        <img className="profile" src="/assets/images/Dashboard/Profile.png" alt="" /></div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;