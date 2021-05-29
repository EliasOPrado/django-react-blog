import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Articles from "./components/Articles";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [editArticle, setEditArticle] = useState(null);

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

  const triggerAddArticleBtn = () => {
    setArticles("add-article");
  };

  
  return (
    <div className="App">
      <React.Fragment>
      <Nav addArticle={triggerAddArticleBtn} />
      </React.Fragment>
      <br />
      <br />
      
      {articles === "add-article" ? <Form /> : <Articles articles={articles} />}
    </div>
  );
}

export default App;
