import React from 'react'
import Nav from "./components/Nav";
import Form from "./components/Form"
import Articles from "./components/Articles"
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <React.Fragment>
        <Nav />
      </React.Fragment>
      <br/>
      <br/>
      <Form />
      <Articles />
    </div>
  );
}

export default App;
