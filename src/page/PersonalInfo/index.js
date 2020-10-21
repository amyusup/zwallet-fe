import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, Footer, Nav } from "../../components";
import { GetUsers } from "../../redux/actions/Users";

const Content = (props) => {
  const { data, loading, error } = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      GetUsers({
        authorization: "Bearer " + Auth.data.accessToken,
      })
    );
  }, []);

  // console.log(props.history.location)

  return (
    <div class="col-12 col-md-8 p-4 mt-1  pb-0 pl-5 pt-3 mb-1 card-zwallet h-100">
      <div class="row font-weight-bold ">Personal Information</div>

      <div class="row w-50 py-3 nunito-grey">
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </div>
      <div class="row w-100  py-3 my-2 sub-card">
        <div class="col-8 col-md-7 col-lg-8 ">
          <div class="nunito-grey pb-1 small">First Name</div>
          <div class="font-weight-bold nunito-grey">{data.firstName}</div>
        </div>
      </div>
      <div class="row w-100  py-3 my-2 sub-card">
        <div class="col-8 col-md-7 col-lg-8 ">
          <div class="nunito-grey pb-1 small">Last Name</div>
          <div class="font-weight-bold nunito-grey">{data.lastName}</div>
        </div>
      </div>
      <div class="row w-100  py-3 my-2 sub-card">
        <div class="col-8 col-md-7 col-lg-8 ">
          <div class="nunito-grey pb-1 small">Verified E-mail</div>
          <div class="font-weight-bold nunito-grey">{data.email}</div>
        </div>
      </div>
      <div class="row w-100  py-3 my-2 sub-card">
        <div class="col-12 col-md-12 col-lg-12 ">
          <div class="d-flex flex-row">
            <div class="nunito-grey d-flex justify-content-start pb-1 small">
              Phone Number
            </div>
            <div onClick={()=>{
              props.history.push({
                pathname:"/profile/personal-info/manage-phone",
                phone:data.phone
              })

            }} class="ml-auto small primary-zwallet font-weight-bold">
              Manage
            </div>
          </div>
          <div class="font-weight-bold nunito-grey">{data.phone}</div>
        </div>
      </div>
    </div>
  );
};

const Profile = (props) => {
  return (
    <>
      <div className="container-fluid">
        <Nav />
        <div className="row my-5 d-flex justify-content-center">
          <Sidebar {...props} />
          <Content {...props} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
