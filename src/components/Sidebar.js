import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {AuthLogout} from '../redux/actions/Auth'

const ContentSidebar = (props) =>{
    return(
        // {/* <!-- START SUB SIDE NAV --> */}
        <div className="col-12 col-md-2 d-none d-sm-block px-0 mb-1 mr-3 py-3 card-zwallet">
        <ul className="nav flex-column">
          {props.location.pathname === "/dashboard" ? (
            <li className="nav-item pb-2 py-2">
              <Link to="/dashboard" className="nav-link active-side-card">
                <img
                  src="/assets/image/dashboard-active.svg"
                  className="px-2 img-1-1rem"
                  alt="dashboard"
                />
                Dashboard
              </Link>
            </li>
          ) : (
            <li className="nav-item pb-2 py-2">
              <Link to="/dashboard" className="nav-link nunito-grey">
                <img
                  src="/assets/image/dashboard.svg"
                  className="px-2 img-1-1rem"
                  alt="dashboard"
                />
                Dashboard
              </Link>
            </li>
          )}

          {props.location.pathname === "/transfer" || 
          props.location.pathname === "/transfer/amount" || 
          props.location.pathname === "/transfer/confirmation" || 
          props.location.pathname === "/transfer/history" ? (
            <li className="nav-item pb-2 py-2">
              <Link to="/transfer" className="nav-link active-side-card">
                <img
                  src="/assets/image/transfer-active.svg"
                  className="px-2 img-1-1rem"
                  alt="transfer"
                />
                Transfer
              </Link>
            </li>
          ) : (
            <li className="nav-item pb-2 py-2">
              <Link to="/transfer" className="nav-link nunito-grey">
                <img
                  src="/assets/image/transfer.svg"
                  className="px-2 img-1-1rem"
                  alt="transfer"
                />
                Transfer
              </Link>
            </li>
          )}

          {props.location.pathname === "/topup" ? (
            <li className="nav-item pb-2 py-2">
              <Link to="/topup" className="nav-link active-side-card">
                <img
                  src="/assets/image/topup-active.svg"
                  className="px-2 img-1-1rem"
                  alt="topup"
                />
                Topup
              </Link>
            </li>
          ) : (
            <li className="nav-item pb-2 py-2">
              <Link to="/topup" className="nav-link nunito-grey">
                <img
                  src="/assets/image/top-up.svg"
                  className="px-2 img-1-1rem"
                  alt="topup"
                />
                Topup
              </Link>
            </li>
          )}
          {props.location.pathname === "/profile" || 
          props.location.pathname === "/profile/personal-info" || 
          props.location.pathname === "/profile/personal-info/manage-phone"  ? (
            <li className="nav-item pb-2 py-2">
              <Link to="/profile" className="nav-link active-side-card">
                <img
                  src="/assets/image/profile-active.svg"
                  className="px-2 img-1-1rem"
                  alt="profile"
                />
                Profile
              </Link>
            </li>
          ) : (
            <li className="nav-item pb-2 py-2">
              <Link to="/profile" className="nav-link nunito-grey">
                <img
                  src="/assets/image/profile.svg"
                  className="px-2 img-1-1rem"
                  alt="profile"
                />
                Profile
              </Link>
            </li>
          )}

          <li className="nav-item bottom mb-4 px-2">
            <div className="nav-link nunito-grey" onClick={()=> props.onLogout()}>
              <img
                src="/assets/image/log-out.svg"
                className="pr-2 img-1-1rem"
                alt="logout"
              />
              Logout
            </div>
          </li>
        </ul>
      </div>
    //   {/* <!-- END SUB SIDE NAV --> */}
    )
}

const Sidebar = (props) =>{
    let location = useLocation()
    let history = useHistory()
    const dispatch = useDispatch()
    const onLogout = () =>{
        dispatch(AuthLogout())
        history.replace('/login')
    }

    return(
        <ContentSidebar location={location} onLogout={onLogout} />
    )
}

export default Sidebar