import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, Footer, Nav } from "../../components";
import { GetTopup } from "../../redux/actions/Topup";

const Content = () => {
  const { data, loading, error } = useSelector((s) => s.Topup);
  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      GetTopup({
        authorization: "Bearer " + Auth.data.accessToken,
      })
    );
  }, []);

  // console.log(data)

  return (
    <div className="col-12 col-md-8 p-4 mt-1 pb-0 pl-5 pt-3 mb-1 card-zwallet height-100">
      <div className="font-weight-bold mb-4">How To Top Up</div>
      {data.map((item,i) => {
        return (
          <div className="d-flex flex-row p-4 sub-card my-3" key={i}>
            <div className="primary-zwallet p font-weight-bold mr-3" >{item.step}</div>
            <div>{item.instructions}</div>
          </div>
        );
      })}
    </div>
  );
};

const Home = (props) => {
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

export default Home;
