import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, Footer, Nav } from "../../components";
import { AddTransferUser } from "../../redux/actions/Transfer";
import "../../assets/css/transfer-amount.css";

const Content = (props) => {
  const { data, loading, error } = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const inputFocus = useRef(null);
  const [pin, setPin] = useState("");
  var today = new Date();
  var options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  var timeOption = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const date =
    today.toLocaleString("en-US", options) +
    " - " +
    today.toLocaleTimeString([], timeOption);
  const {
    location: { receiver, input },
  } = props;

  const dataInput = {
    idSender: data.id,
    idReceiver: receiver.id,
    amount: input.amount,
    notes: input.notes,
  };
  const handleSubmit = () => {
    if (pin !== data.pin) {
      alert("Insert pins correctly");
    } else {
      dispatch(
        AddTransferUser({
          authorization: "Bearer " + Auth.data.accessToken,
          data: dataInput,
        })
      );
      alert("Successfully transfer")
      window.location.reload()
    }
  };

  // console.log(pin);

  return (
    <>
      <div className="col-12 col-md-8 p-4 mt-1  pb-0 pl-5 pt-3 mb-1 card-zwallet h-100">
        <div className="font-weight-bold ">Transfer To</div>
        <div className="row w-100  py-2 my-2 sub-card">
          <div className="col-4 col-md-3 col-lg-2 pr-0 ">
            <img src={receiver.photo} className="image-card" alt="user" />
          </div>
          <div className="col-8 col-md-7 col-lg-8 pl-0 pt-2">
            <div>{receiver.name}</div>
            <div className="small nunito-grey">{receiver.phone}</div>
          </div>
        </div>
        <div className="font-weight-bold">Details</div>
        <div className="row w-100  py-2 my-2 sub-card">
          <div className="col-8 col-md-7 col-lg-8 ">
            <div className="nunito-grey ">Amount</div>
            <div className="font-weight-bold ">{input.amount}</div>
          </div>
        </div>
        <div className="row w-100  py-2 my-2 sub-card">
          <div className="col-8 col-md-7 col-lg-8 ">
            <div className="nunito-grey ">Balance Left</div>
            <div className="font-weight-bold ">{input.balanceLeft}</div>
          </div>
        </div>
        <div className="row w-100  py-2 my-2 sub-card">
          <div className="col-8 col-md-7 col-lg-8 ">
            <div className="nunito-grey ">Date & Time</div>
            <div className="font-weight-bold ">{date}</div>
          </div>
        </div>
        <div className="row w-100  py-2 my-2 sub-card">
          <div className="col-8 col-md-7 col-lg-8 ">
            <div className="nunito-grey ">Notes</div>
            <div className="font-weight-bold ">{input.notes}</div>
          </div>
        </div>
        {/* <!-- Button trigger modal --> */}
        <div className="d-flex justify-content-end">
          <button
            type="button"
            data-toggle="modal"
            data-target="#confirmation-pin"
            className="btn bg-primary-zwallet  mr-3 px-4 py-2 mt-3 "
          >
            <div className="small text-center px-0">Continue</div>
          </button>
        </div>
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
                  value={pin}
                  ref={inputFocus}
                  maxLength={6}
                  onChange={(e) => setPin(e.target.value)}
                  style={{ opacity: 0, position: "absolute" }}
                />
                <div className="col-2  px-2 ">
                  <input
                    id="codeBox1"
                    type="number"
                    maxLength="1"
                    readOnly
                    value={pin.charAt(0)}
                    onFocus={() => inputFocus.current.focus()}
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
                    value={pin.charAt(1)}
                    onFocus={() => inputFocus.current.focus()}
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
                    value={pin.charAt(2)}
                    onFocus={() => inputFocus.current.focus()}
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
                    value={pin.charAt(3)}
                    onFocus={() => inputFocus.current.focus()}
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
                    value={pin.charAt(4)}
                    onFocus={() => inputFocus.current.focus()}
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
                    value={pin.charAt(5)}
                    onFocus={() => inputFocus.current.focus()}
                    className="form-control text-center px-2"
                    placeholder="_"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                onClick={handleSubmit}
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

const TransferSearch = (props) => {
  // console.log(props.location)
  const history = useHistory();
  !props.location.receiver && history.replace("/transfer");
  return (
    <>
      <div className="container-fluid">
        <Nav />
        <div className="row my-5 d-flex justify-content-center">
          <Sidebar {...props} />
          {props.location.receiver ? (
            <Content {...props} />
          ) : (
            <div>no data</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TransferSearch;
