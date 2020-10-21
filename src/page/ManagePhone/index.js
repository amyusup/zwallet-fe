import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, Footer, Nav } from "../../components";
import { GetUsers, DeletePhoneUser, AddPhoneUser } from "../../redux/actions/Users";

const ContentWithPhone = (history) => {
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

  // console.log(data)

  const handleDelete = (e) => {
    // console.log("sampe")
    e.preventDefault(e);
    dispatch(
      DeletePhoneUser({
        authorization: "Bearer " + Auth.data.accessToken,
        phone:""
      })
    );
    alert("Successfully delete phone number");
    history.replace('/profile/personal-info')
    
  };

  return (
    <div className="col-12 col-md-8 p-4 mt-1  pb-0 pl-5 pt-3 mb-1 card-zwallet height-80">
      <div className="row font-weight-bold ">Manage Phone Number</div>

      <div className="row w-50 py-3 nunito-grey">
        You can only delete the phone number and then you must add another phone
        number.
      </div>

      <div className="row w-100  my-2 sub-card">
        <div className=" row d-flex  w-75 mx-auto radius-10 my-3">
          <div className="flex-row">
            <div className="flex-column">
              <div className="small">Personal Information</div>
              <div className="">{data.phone}</div>
            </div>
          </div>

          <button
            onClick={(e) => handleDelete(e)}
            className="ml-auto mr-2 btn bg-transparent"
          >
            <img
              className="icon-md"
              src="/assets/image/trash.svg"
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const ContentWithoutPhone = (history) => {
  // const { data, loading, error } = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const [phone,setPhone] = useState("")

  useEffect(() => {
    dispatch(
      GetUsers({
        authorization: "Bearer " + Auth.data.accessToken,
      })
    );
  }, []);

  // console.log(props)

  const handlePost = (e) => {
    // console.log("sampe")
    e.preventDefault(e);
    dispatch(
      AddPhoneUser({
        authorization: "Bearer " + Auth.data.accessToken,
         phone:phone,
      })
    );
    alert("Successfully add phone number");
    history.replace('/profile/personal-info')
    // window.location.reload();
    
  };

  return (
    <div className="col-12 col-md-8 p-4 mt-1  pb-0 pl-5 pt-3 mb-1 card-zwallet height-80">
      <div className="row font-weight-bold ">Add Phone Number</div>

      <div className="row w-50 py-3 nunito-grey">
        Add at least one phone number for the transfer ID so you can start
        transfering your money to another user.
      </div>

      <div className=" mx-auto my-5 ">
        <label htmlFor="notes" className="nunito-transparent">
          .
        </label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          name="notes"
          id="notes"
          className="form-control flat-form form-phone w-75 "
          placeholder="Enter your phone number"
        />
      </div>
      <div class="d-flex justify-content-center">
        <button
          onClick={(e) => handlePost(e)}
          to="/profile/personal-info"
          class="btn bg-grey-md-zwallet w-75"
        >
          <div class="">Personal Information</div>
        </button>
      </div>
    </div>
  );
};

const Profile = (props) => {
  // console.log(props.location);
  const history = useHistory();
  return (
    <>
      <div className="container-fluid">
        <Nav />
        <div className="row my-5 d-flex justify-content-center">
          <Sidebar {...props} />
          {props.location.phone ? (
            <ContentWithPhone {...history} />
          ) : (
            <ContentWithoutPhone {...history} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
