import { useState, useEffect } from "react";
import List from "./List";
import "./App.css";

function App() {
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
    <div className="App">
      <header className="App-header">
        {articles.map((list, index) => (
          <List key={index} index={index} list={list} />
        ))}
      </header>
      s
    </div>
  );
}

export default App;
