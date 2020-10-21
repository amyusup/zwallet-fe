import React from "react";

const Content = () => {
  return (
    // <!-- SIDE AUTH -->
    <div className="bg-wave d-none d-sm-block col-md-12  col-lg-7 text-white  ">
      <div className="pl-5 pt-3 h3 ">Zwallet</div>
      <div className="d-flex justify-content-center">
        <img
          src="/assets/image/phone.svg"
          className="image-responsive "
          alt="phone"
        />
      </div>
      <div className=" text-left px-5 mx-5 pb-3">
        <h5>App that Covering Banking Needs.</h5>
      </div>
      <div className=" text-left px-5 mx-5">
        Zwallet is an application that focussing in banking needs for all users
        in the world. Always updated and always following world trends. 5000+
        users registered in Zwallet everyday with worldwide users coverage.
      </div>
    </div>
    //   <!-- SIDE AUTH -->
  );
};

const SidebarAuth = () => {
  return (
  <Content />
  )
};

export default SidebarAuth;
