import React from "react";
import notFound from "../../images/banner_error_404.jpg";

const Notfound = () => {
  return (
    <div className="">
      <img className="w-full" src={notFound} alt="notFound" />
    </div>
  );
};

export default Notfound;
