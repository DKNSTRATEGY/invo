import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
//import images
import avatar1 from "../assets/images/users/avatar-4.jpg"
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import UserProfile from "../pages/Authentication/UserProfile";
import { Link } from 'react-router-dom';


const ProfileDropdown = () => {

    const [userName, setUserName] = useState<any>("Admin");

    const profiledropdownData = createSelector(
        (state: any) => state.Profile,
        (user:any) => user
    );

    // Inside your component
    const user = useSelector(profiledropdownData);

    useEffect(() => {
        const authUser: any = sessionStorage.getItem("authUser");
        if (authUser) {
            const obj = JSON.parse(authUser);
            setUserName(process.env.REACT_APP_DEFAULTAUTH === "fake" ? obj.username === undefined ? user.username ? user.username : obj.data.first_name : "Admin" || "Admin" :
                process.env.REACT_APP_DEFAULTAUTH === "firebase" ? obj.email && obj.email : "Admin"
            );
        }
    }, [userName, user]);

    return (
        <React.Fragment>
            
            <Dropdown className="header-item">
            <Dropdown.Toggle type="button" className="btn bg-transparent border-0 arrow-none" id="page-header-user-dropdown">
                        <span className="d-flex align-items-center">
                            <img className="rounded-circle header-profile-user" src={avatar1} alt="Header Avatar" />
                            <span className="text-start ms-xl-2">
                                <span className="d-none d-xl-inline-block fw-medium user-name-text fs-16">{userName} <i className="las la-angle-down fs-12 ms-1"></i></span>
                            </span>
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end">                        
                        <Dropdown.Item as={Link} to="/User" className="dropdown-item" href="#"><i className="bx bx-user fs-15 align-middle me-1"></i> <span key="t-profile">Profile</span></Dropdown.Item>
                        
                        <Dropdown.Item as={Link} to = "/auth-pass-reset"className="dropdown-item d-block" href="#"><i className="bx bx-wrench fs-15 align-middle me-1"></i> <span key="t-settings">Reset Password</span></Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href={process.env.PUBLIC_URL + "/auth-lockscreen"}><i className="bx bx-lock-open fs-15 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></Dropdown.Item>
                        <div className="dropdown-divider"></div>
                        <Dropdown.Item className="dropdown-item text-danger" href={process.env.PUBLIC_URL + "/logout"}><i className="bx bx-power-off fs-15 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </React.Fragment>
    );
}
//<Dropdown.Item className="dropdown-item" href="#"><i className="bx bx-wallet fs-15 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></Dropdown.Item>
export default ProfileDropdown;