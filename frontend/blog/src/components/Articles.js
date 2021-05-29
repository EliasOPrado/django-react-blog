
import React, { useState, useEffect } from "react";
import List from "./List";

function Articles() {
    const [articles, setArticles] = useState([]);

  const getResult = async () => {
    fetch("http://127.0.0.1:8001/api/article/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  };
  console.log("REQUEST ==>", articles);


  useEffect(() => {
    getResult();
  }, []);
    return (
        <div className="container">
      
        <h1 className="mt-4 mb-3">
          Blog Home One
          <small>Subheading</small>
        </h1>
        <React.Fragment>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Blog Home 1</li>
          </ol>
        </React.Fragment>
        <div className="row">
          <div className="col-md-8">
            <React.Fragment>
              {articles.map((list, index) => (
                <List key={index} index={index} list={list} />
              ))}
            </React.Fragment>

            <ul className="pagination justify-content-center mb-4">
              
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  Newer &rarr;
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-4">
            <div className="card mb-4">
              <h5 className="card-header">Search</h5>
              <div className="card-body">
                <div className="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search for..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">
                      Go!
                    </button>
                  </span>
                </div>
              </div>
            </div>


            <div className="card my-4">
              <h5 className="card-header">Side Widget</h5>
              <div className="card-body">
                You can put anything you want inside of these side widgets. They
                are easy to use, and feature the new Bootstrap 4 card
                containers!
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Articles
