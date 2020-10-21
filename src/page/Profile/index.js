import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, Footer, Nav } from "../../components";
import { GetUsers } from "../../redux/actions/Users";

const Content = () => {
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

  return (
    <>
      <div class="col-12 col-md-8 p-4 mt-1 pb-0 pl-5 pt-5 mb-1 card-zwallet h-100">
        <div class="d-flex flex-column align-items-center my-2">
          <img class="avatar-zwallet" src={data.photo} alt="user" />
          <div 
              data-toggle="modal"
              data-target="#confirmation-pin" class="btn bg-transparent">
            <div class="small">
              <img
                class="icon-small"
                src="/assets/image/pencil.svg"
                alt="edit"
              />
              &nbsp;Edit
            </div>
          </div>
          <div class="h5 nunito-grey">{data.name}</div>
          <div class=" nunito-grey">{data.phone}</div>
        </div>

        <Link
          to="/profile/personal-info"
          class="btn bg-grey-md-zwallet row d-flex w-75 mx-auto p-3 radius-10 my-3"
        >
          <div class="">Personal Information</div>
          <div class="ml-auto mr-2">
            <img
              class="icon-md"
              src="/assets/image/arrow-left.svg"
              alt="arrow"
            />
          </div>
        </Link>
        <Link
          to="profile/chage-password"
          class="btn bg-grey-md-zwallet row d-flex w-75 mx-auto p-3 radius-10 my-3"
        >
          <div class="">Change Password</div>
          <div class="ml-auto mr-2">
            <img
              class="icon-md"
              src="/assets/image/arrow-left.svg"
              alt="arrow"
            />
          </div>
        </Link>
        <button class="btn bg-grey-md-zwallet row d-flex w-75 mx-auto p-3 radius-10 my-3">
          <div class="">Change PIN</div>
          <div class="ml-auto mr-2">
            <img
              class="icon-md"
              src="/assets/image/arrow-left.svg"
              alt="arrow"
            />
          </div>
        </button>
        <button  class="btn bg-grey-md-zwallet row d-flex w-75 mx-auto p-3 radius-10 my-3">
          <div class="">Logout</div>
          <div class="ml-auto mr-2">
            <img
              class="icon-md"
              src="/assets/image/arrow-left.svg"
              alt="arrow"
            />
          </div>
        </button>
      </div>

       {/* <!-- Modal --> */}
       <div
        className="modal fade "
        id="confirmation-pin"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered w-100" role="document">
          <div className="modal-content zwallet-modal p-2">
            <div className="modal-header border-0">
              <h6 className="modal-title pb-0" id="exampleModalLongTitle">
                Enter PIN to Transfer
              </h6>
              <button
                type="button"
                className="close "
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body pt-0">
              <div className="small nunito-grey">
                Enter your 6 digits PIN for confirmation to continue
                transferring money.
              </div>

              <div className="form-row pt-4">
                <input
                  // value={pin}
                  // ref={inputFocus}
                  maxLength={6}
                  // onChange={(e) => setPin(e.target.value)}
                  style={{ opacity: 0, position: "absolute" }}
                />
                <div className="col-2  px-2 ">
                  <input
                    id="codeBox1"
                    type="number"
                    maxLength="1"
                    readOnly
                    // value={pin.charAt(0)}
                    // onFocus={() => inputFocus.current.focus()}
                    className="form-control text-center px-2"
                    placeholder="_"
                  />
                </div>
                <div className="col-2  px-2 ">
                  <input
                    id="codeBox2"
                    type="number"
                    maxLength="1"
                    readOnly
                    // value={pin.charAt(1)}
                    // onFocus={() => inputFocus.current.focus()}
                    className="form-control text-center px-2"
                    placeholder="_"
                  />
                </div>
                <div className="col-2  px-2 ">
                  <input
                    id="codeBox3"
                    type="number"
                    maxLength="1"
                    readOnly
                    // value={pin.charAt(2)}
                    // onFocus={() => inputFocus.current.focus()}
                    className="form-control text-center px-2"
                    placeholder="_"
                  />
                </div>
                <div className="col-2  px-2 ">
                  <input
                    id="codeBox4"
                    type="number"
                    maxLength="1"
                    readOnly
                    // value={pin.charAt(3)}
                    // onFocus={() => inputFocus.current.focus()}
                    className="form-control text-center px-2"
                    placeholder="_"
                  />
                </div>
                <div className="col-2  px-2 ">
                  <input
                    id="codeBox5"
                    type="number"
                    maxLength="1"
                    readOnly
                    // value={pin.charAt(4)}
                    // onFocus={() => inputFocus.current.focus()}
                    className="form-control text-center px-2"
                    placeholder="_"
                  />
                </div>
                <div className="col-2  px-2 ">
                  <input
                    id="codeBox6"
                    type="number"
                    maxLength="1"
                    readOnly
                    // value={pin.charAt(5)}
                    // onFocus={() => inputFocus.current.focus()}
                    className="form-control text-center px-2"
                    placeholder="_"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                // onClick={handleSubmit}
                type="submit"
                className="btn bg-primary-zwallet w-30 ml-auto mr-3"
              >
                <div className="small text-center px-0">Continue</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Profile = (props) => {
  return (
    <>
      <div className="container-fluid">
        <Nav />
        <div className="row my-5 d-flex justify-content-center">
          <Sidebar {...props} />
          <Content />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
