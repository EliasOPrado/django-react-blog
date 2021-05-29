import React from "react";

function Nav() {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          Start Bootstrap
        </a>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <button className="btn btn-warning">Add Article</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
