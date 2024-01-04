import React from "react";

const ErrorPage = () => {
  return (
    <div className="container">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ minHeight: "66vh" }}>
        <h1>
          <span className="text-danger">Error 404..</span> Restaurant not Found
          !!
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
