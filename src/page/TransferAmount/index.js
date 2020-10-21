import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, Footer, Nav } from "../../components";
import { SearchUser } from "../../redux/actions/Users";
import "../../assets/css/transfer-amount.css";

const Content = (props) => {
  const { data, loading, error } = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const {
    location: { receiver },
  } = props;

  useEffect(() => {
    dispatch(
      SearchUser({
        authorization: "Bearer " + Auth.data.accessToken,
        // name: name
      })
    );
  }, []);

  // console.log(props)

  return (
    <div className=" col-12 col-md-8 p-4 mt-1  pb-5 pl-5 pt-4 card-zwallet h-100 ">
      <div className="font-weight-bold ">Transfer Money</div>
      <div className="row w-100  py-2 my-4 sub-card">
        <div className="col-4 col-md-3 col-lg-2 pr-0 ">
          <img src={receiver.photo} className="image-card" alt="user" />
        </div>
        <div className="col-8 col-md-7 col-lg-8 pl-0 pt-2">
          <div>{receiver.name}</div>
          <div className="small nunito-grey">{receiver.phone}</div>
        </div>
      </div>
      <div className="p nunito-grey ">
        Type the amount you want to transfer and then
        <br />
        press continue to the next steps.
      </div>
      <div className=" text-center pt-4 my-0 ">
        <label htmlFor="idr" className="nunito-transparent">
          .
        </label>
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="form-control flat-form text-center nunito-grey idr mx-auto"
          name="idr"
          id="idr"
          placeholder="0.00"
        />
      </div>
      <div className="font-weight-bold text-center">
        {data.balance - amount} Available
      </div>
      <div className=" text-center nunito-grey pt-3 my-2 mx-5 ">
        <label htmlFor="notes" className="nunito-transparent">
          .
        </label>
        <input
          onChange={(e) => setNotes(e.target.value)}
          type="text"
          name="notes"
          id="notes"
          className="form-control flat-form  form-amount-blank"
          placeholder="Add some notes"
        />
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          className="btn bg-primary-zwallet mr-3 px-4 py-2 mt-3 "
          onClick={() => {
            props.history.push({
              pathname: "/transfer/confirmation",
              receiver: { ...receiver },
              input: {
                amount: amount,
                balanceLeft: data.balance - amount,
                notes: notes,
              },
            });
          }}
        >
          <div className="small text-center px-0">Continue</div>
        </button>
      </div>
    </div>
  );
};

const TransferSearch = (props) => {
  // console.log(props.location.receiver)
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
