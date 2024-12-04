import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8082/read/" + id)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          name: res.data[0].name,
          mail: res.data[0].mail,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const [values, setValues] = useState({
    name: "",
    mail: "",
  });
  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put("http://127.0.0.1:8082/update/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Modifier élève</h2>
          <div className="mb-2">
            <label htmlFor="">Nom</label>
            <input
              type="text"
              placeholder="Entrer le nom"
              className="form-control"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Mail</label>
            <input
              type="text"
              placeholder="Entrer le mail"
              className="form-control"
              value={values.mail}
              onChange={(e) => setValues({ ...values, mail: e.target.value })}
              required
            />
          </div>
          <button className="btn btn-success">Modifier</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
