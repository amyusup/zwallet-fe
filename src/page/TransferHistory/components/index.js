import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, Footer, Nav } from "../../../components";
import { GetTransferHistory } from "../../../redux/actions/TransferHistory";

const Content = () => {
  const { data, loading, error } = useSelector((s) => s.TransferHistory);
//   const Auth = useSelector((s) => s.Auth);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(
//       GetTransferHistory({
//         authorization: "Bearer " + Auth.data.accessToken,
//         order: "month",
//       })
//     );
//   }, []);

//   console.log(data);

  return(
    <>
      {data.map((item, i) => {
        return (
          <div className="row w-100  py-2">
            <div className="col-3 col-md-3 col-lg-2 pr-0">
              <img key={i} src={item.photo} className="image-card" alt="user" />
            </div>
            <div className="col-7 col-md-7 col-lg-8 pl-0 ">
              <div key={i}>{item.name}</div>
              <div className="small nunito-grey">Transfer</div>
            </div>
            <div key={i} className="col-2 col-md-2 col-lg-2 p-2 nunito-succes small">
              {item.amount}
            </div>
          </div>
        );
      })}
    </>
    
  )
     
    
  
};

const OrderHistory = () => {
  return (
    <>
      <Content />
    </>
  );
};

export default OrderHistory;
