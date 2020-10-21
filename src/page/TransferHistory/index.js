import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, Footer, Nav } from "../../components";
import {GetTransferHistory} from '../../redux/actions/TransferHistory'
import OrderHistory from './components'

const Content = () => {
  const { data, loading, error } = useSelector((s) => s.TransferHistory);
  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      GetTransferHistory({
        authorization:'Bearer '+ Auth.data.accessToken,
        order:'month'
      })
      )
    }, [])
  
    // console.log(data)

  return (
    <div className="col-12 col-md-8 p-4 mt-1 mb-1 py-5 card-zwallet">
    <div className="h6 "> Transaction History</div>
    <div className=" nunito-grey py-3">
        This Week
    </div>
    <OrderHistory/>
    <div className=" nunito-grey py-2">
        This Month
    </div>
    <OrderHistory/>

</div>
    );
};

const TransferHistory = (props) => {
  return (
    
       <>
        <div className="container-fluid">
          <Nav />
          <div className="row my-5 d-flex justify-content-center">
            <Sidebar {...props} />
            <Content  />
          </div>
        </div>
        <Footer />
      </>
    
    
  );
};

export default TransferHistory;
