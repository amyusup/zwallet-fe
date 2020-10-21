import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, Footer, Nav } from "../../components";
import { GetTransferUsers } from "../../redux/actions/Transfer";
import { Link } from "react-router-dom";

const Content = () => {
  const { data, loading, error } = useSelector((s) => s.Transfer);
  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      GetTransferUsers({
        authorization: "Bearer " + Auth.data.accessToken,
      })
    );
  }, []);

  // console.log(data)

  return (
    <div className="col-12 col-md-8">
      {/* <!-- START CARD ATAS --> */}

      <div className="row bg-primary-zwallet card-zwallet mt-2 p-4 pb-0 pl-5 pt-3">
        <div className="col-6 col-md-9">
          <div>Balance</div>
          <div className="h4 my-2">Rp120.000</div>
          <div className="small">+62 813-9387-7946</div>
        </div>
        <div className="col-6 col-md-3">
          <div>
            <form action="search-receiver.html">
              <button
                type="submit"
                className="btn bg-grey-zwallet ml-auto mr-3 my-2 w-100"
              >
                <img
                  src="/assets/image/transfer-grey.svg"
                  alt="transfer"
                  className="left img-1-1rem px-4"
                />
                <div className="small text-center px-0">Transfer</div>
              </button>
            </form>
          </div>
          <div>
            <button
              type="button"
              className="btn bg-grey-zwallet ml-auto mr-3 w-100"
            >
              <img
                src="/assets/image/top-up-grey.svg"
                alt="transfeq"
                className="left img-1-1rem px-4"
              />
              <div className="small text-center px-0">Top Up</div>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- END CARD ATAS --> */}
      <div className="row mt-3">
        <div className="col-12 col-md-12 col-lg-7 mr-3 card-zwallet">
          <div className="row">
            <div className="col">
              <img
                src="/assets/image/income.svg"
                alt="income"
                className="pt-4 pb-1 pl-2"
              />
              <div className="text-left">Income</div>
              <div className="h4 text-left">Rp2.120.000</div>
            </div>
            <div className="col">
              <img
                src="/assets/image/expense.svg"
                alt="income"
                className="pt-4 pb-1 pl-2"
              />
              <div className="text-left">Expense</div>
              <div className="h4 text-left">Rp2.120.000</div>
            </div>
          </div>
          <canvas id="myChart" className=""></canvas>
        </div>
        <div className="col card-zwallet p-3">
          <div className="d-flex flex-row">
            <div className="p-2">Transaction History</div>
            <div className="p-2 ml-auto">
              <Link to="/transfer/history" className="primary-zwallet" href="history.html">
                See all
              </Link>
            </div>
          </div>
          {data.map((item) => {
            return (
              <div className="row w-100 py-2">
                <div className="col-3 col-md-3 col-lg-4 col-xl-3 pr-0">
                  <img src={item.photo} className="image-card" alt="user" />
                </div>
                <div className="col-5 col-md-7 col-lg-5 col-xl-5 pl-0">
                  <div>{item.name}</div>
                  <div className="small nunito-grey">Transfer</div>
                </div>
                <div className="col-4 col-md-2 col-lg-3 col-xl-4 nunito-succes small">
                  {item.balance}
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
