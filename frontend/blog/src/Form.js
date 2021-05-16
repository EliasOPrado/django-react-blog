import React, {useState} from "react";
import axios from 'axios'

function Form() {
  const [value, setValue] = useState({
    title: "",
    article: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    axios.post("http://127.0.0.1:8001/api/article/", value, {
        headers: {
          "content-type": "application/json",
        }})
      .then((resp) => resp.json())
      .then((resp) => console.log("RES JSON ==>", resp.data))
      .catch((error) => console.log(error));
    setValue({ title: "", article: "" });
  };
  const handleChange = (e) => {
      /* gets all values from inputs and add to "value" state*/
    e.preventDefault();
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(value)
//   const insertArticle = async (body) => {
//     axios.post("http://127.0.0.1:8001/api/article/", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//           'Authorization': null
//         },
//        body:JSON.stringify(body)})
//       .then((resp) => resp.json())
//       .then((resp) => console.log("RES JSON ==>", resp.data))
//       .catch((error) => console.log(error));
//   };
  return (
    <div className="row">
      <div className="col-md-9 mx-auto">
        <form onSubmit={handleSubmit}>
          <br />
          <br />

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="title"
              value={value.title}
              onChange={handleChange}
              placeholder="Add the title.."
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              rows="3"
              name="article"
              value={value.article}
              onChange={handleChange}
              placeholder="Add the text.."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
              Submit
            </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
