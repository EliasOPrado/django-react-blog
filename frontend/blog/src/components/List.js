import React from "react";

function List({ list, index }) {


  const DeleteArticle = (list) => {
    return fetch(`http://127.0.0.1:8001/api/article/${list}/`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  };

  const deleteBtn = (list) => {
    DeleteArticle(list.id,)
    .then(() => {
        deleteBtn(list)
    })
    .catch(error => console.log(error))
}
  
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
            <a onClick={() => {deleteBtn(list); window.location.reload()}} class="btn btn-danger">
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
