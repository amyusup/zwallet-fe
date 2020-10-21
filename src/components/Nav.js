import React, { useEffect } from "react";
import Axios from "axios";
import { TextBlock } from "react-placeholder/lib/placeholders";
import { Link, useLocation } from "react-router-dom";
// import {authHeader} from '../utils'
import { useDispatch, useSelector } from "react-redux";
import { GetUsers } from "../redux/actions/Users";
// import Auth from "../redux/reducers/Auth";

const Nav = (props) => {
  const { data, loading, error } = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);
  // const Users = useSelector((s)=> s.Users)
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      GetUsers({
        authorization: "Bearer " + Auth.data.accessToken,
      })
    );
  }, []);

  // console.log(loading)

  return (
    <div className="row">
      {/* <!-- START NAV --> */}
      <div className="col-12 p-0 m-0">
        <nav className="w-100 navbar navbar-expand-md navbar-light bg-white nav-zwallet mb-1 py-1">
          <div className="container">
            <h3 className="my-auto">
              <div className="navbar-brand primary-zwallet ">Zwallet</div>
            </h3>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse w-100 flex-md-column"
              id="navbarCollapse"
            >
              <div className="row ml-auto small ">
                <div className="col-1 col-md-3"></div>
                <div className="col-3 col-md-2">
                  <ul className="navbar-nav ml-auto h2">
                    <li className="nav-item active">
                      <div className="nav-link px-2">
                        <img
                          className="avatar-zwallet"
                          src={data.photo}
                          alt="user"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-5 pt-1">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <div className="nav-link pb-1 pt-2">
                        {!loading ? (
                          data.name
                        ) : (
                          <TextBlock
                            rows={1}
                            style={{ width: 170, height: 25 }}
                            color="#f0f0f0"
                          />
                        )}
                      </div>
                    </li>
                  </ul>
                  <ul className="navbar-nav small">
                    <li className="nav-item active">
                      <div className="nunito-grey nav-link py-1">
                        {!loading ? (
                          data.phone
                        ) : (
                          <TextBlock
                            rows={1}
                            style={{ width: 150 }}
                            color="#f0f0f0"
                          />
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-1 col-md-2 p-3">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <div className="nav-link py-1">
                        <img
                          src="/assets/image/notification.svg"
                          alt="notification"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- START SUB SIDE NAV --> */}
              <div className="d-block d-sm-none">
                <ul className="nav row text-center">
                  {location.pathname === "/dashboard" ? (
                    <li className="nav-item col-12 py-2">
                      <Link
                        to="/dashboard"
                        className="nav-link active-sub-side-card"
                      >
                        <img
                          src="/assets/image/dashboard-active.svg"
                          className="text-left img-1-1rem"
                          alt="dashboard"
                        />
                        Dashboard
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item col-12 py-2">
                      <Link to="/dashboard" className="nav-link nunito-grey">
                        <img
                          src="/assets/image/dashboard.svg"
                          className="text-left img-1-1rem"
                          alt="dashboard"
                        />
                        Dashboard
                      </Link>
                    </li>
                  )}

                  {location.pathname === "/transfer" ||
                  location.pathname === "/transfer/amount" ||
                  location.pathname === "/transfer/confirmation" ||
                  location.pathname === "/transfer/history" ? (
                    <li className="nav-item col-12 py-2">
                      <Link
                        to="/transfer"
                        className="nav-link active-sub-side-card"
                      >
                        <img
                          src="/assets/image/transfer-active.svg"
                          className="text-left img-1-1rem"
                          alt="transfer"
                        />
                        Transfer
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item col-12 py-2">
                      <Link to="/transfer" className="nav-link nunito-grey">
                        <img
                          src="/assets/image/transfer.svg"
                          className="text-left img-1-1rem"
                          alt="transfer"
                        />
                        Transfer
                      </Link>
                    </li>
                  )}

                  {location.pathname === "/topup" ? (
                    <li className="nav-item col-12 py-2">
                      <Link to="/" className="nav-link active-sub-side-card">
                        <img
                          src="/assets/image/topup-active.svg"
                          className="text-left img-1-1rem"
                          alt="topup"
                        />
                        Topup
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item col-12 py-2">
                      <Link to="/transfer" className="nav-link nunito-grey">
                        <img
                          src="/assets/image/transfer.svg"
                          className="text-left img-1-1rem"
                          alt="transfer"
                        />
                        Transfer
                      </Link>
                    </li>
                  )}
                  {location.pathname === "/profile" ||
                  location.pathname === "/profile/personal-info" ||
                  location.pathname ===
                    "/profile/personal-info/manage-phone" ? (
                    <li className="nav-item col-12 py-2">
                      <Link to="/" className="nav-link active-sub-side-card">
                        <img
                          src="/assets/image/profile-active.svg"
                          className="text-left img-1-1rem"
                          alt="profile"
                        />
                        Profile
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item col-12 py-2">
                      <Link to="/profile" className="nav-link nunito-grey">
                        <img
                          src="/assets/image/profile.svg"
                          className="text-left img-1-1rem"
                          alt="profile"
                        />
                        Profile
                      </Link>
                    </li>
                  )}

                  <li className="nav-item col-12">
                    <div onClick={()=> props.onLogout()} className="nav-link nunito-grey" href="login.html">
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
              {/* <!-- END SUB SIDE NAV --> */}
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- END NAV --> */}
    </div>
  );
};

export default Nav;
