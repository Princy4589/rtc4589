import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({
    name: "",
    mail: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/students", values)
      .then((res) => {
        console.log(res), navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Ajouter élève</h2>
          <div className="mb-2">
            <label htmlFor="">Nom</label>
            <input
              type="text"
              placeholder="Entrer le nom"
              name="name"
              className="form-control"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Mail</label>
            <input
              type="text"
              placeholder="Entrer le mail"
              name="mail"
              className="form-control"
              onChange={(e) => setValues({ ...values, mail: e.target.value })}
              required
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
