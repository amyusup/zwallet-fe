import React from "react";

const Content = () => {
  return (
    // <!-- STAR FOOT -->
    <footer className="foot-zwallet p-2">
      <div className="row w-100">
        <div className="col-12 col-md-9 small" href="#">
          2020 Zwallet. All right reserved.
        </div>
        <div className="col ml-auto small" href="#">
          +62 5637 8882 9901
        </div>
        <div className="col small" href="#">
          contact@zwallet.com
        </div>
      </div>
    </footer>
    //   <!-- END FOOT -->
  );
};

const Footer = () =>{
    return(
        <Content />
    )
}

export default Footer
