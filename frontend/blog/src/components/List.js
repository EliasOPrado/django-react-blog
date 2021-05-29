import React from "react";

function List({ list, index }) {
  return (
    <div class="card mb-4">
      <img
        class="card-img-top"
        src="http://placehold.it/750x300"
        alt="Card image cap"
      />
      <div class="card-body">
        <h2 class="card-title">{list.title} </h2>
        <p class="card-text">{list.article}</p>
        <div>
          <div>
            <a href="#" class="btn btn-primary">
              Read More &rarr;
            </a>
          </div>
          <br />
          <div>
            <a onClick='' class="btn btn-danger">
              Delete 
            </a>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted">
        Posted on {list.date} by
        <a href="#"> {list.author}</a>
      </div>
    </div>
  );
}

export default List;
