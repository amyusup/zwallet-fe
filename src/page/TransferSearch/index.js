import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, Footer, Nav } from "../../components";
import { SearchUser } from "../../redux/actions/Users";
import "../../assets/css/transfer-search.css";

const Content = (props) => {
  const { data, loading, error } = useSelector((s) => s.SearchUser);
  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const [name, setName] = useState("")

  useEffect(() => {
    dispatch(
      SearchUser({
        authorization: "Bearer " + Auth.data.accessToken,
        name: name
      })
    );
  }, [name]);

  // console.log(name)

  return (
    <div className="col-12 col-md-8 p-4 mt-1  pb-5 pl-5 pt-4 card-zwallet h-100">
      <div className="h6">Search Receiver</div>
      <input
      onChange={(e)=>setName(e.target.value)}
        className="form-control form-search row my-3"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      {data.length < 1 ? (
        <div className=" w-100  py-3 my-5  sub-card text-center">
          User Not Found
        </div>
      ) : (
        <div className="height-60">
          {data.map((item) => {
            return (
              <div
                onClick={()=>
                  props.history.push({
                  pathname:"/transfer/amount",
                  receiver:{
                    photo:item.photo,
                    name:item.name,
                    phone:item.phone,
                    id:item.id,
                  }
                })
              }
                className="row w-100  py-3 mb-3 sub-card zwallet-link"
                key={item.id}
              >
                <div className="col-4 col-md-3 col-lg-2 pr-0 ">
                  <img src={item.photo} className="image-card" alt="user" />
                </div>
                <div className="col-8 col-md-7 col-lg-8 pl-0 pt-2">
                  <div>{item.name}</div>
                  <div className="small nunito-grey">{item.phone}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const TransferSearch = (props) => {
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

export default TransferSearch;
