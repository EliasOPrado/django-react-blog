import React from "react";

function Detail() {
  return (
    <div className="container">
      <h1 className="mt-4 mb-3">
        Post Title
        <small>
          by
          <a href="#">Start Bootstrap</a>
        </small>
      </h1>

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item active">Blog Home 2</li>
      </ol>

      <div className="row">
        <div className="col-lg-8">
          <img
            className="img-fluid rounded"
            src="http://placehold.it/900x300"
            alt=""
          />

          <hr />

          <p>Posted on January 1, 2017 at 12:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
