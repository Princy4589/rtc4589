import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8082/read/" + id)
      .then((res) => {
        console.log(res);
        setStudents(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2 className="p-2">Détails des étudiants</h2>
        <h3>ID: {students.id}</h3>
        <h3>Nom: {students.name}</h3>
        <h3>Email: {students.mail}</h3>
        <Link to="/" className="btn btn-primary me-2">
          Retour
        </Link>
        <Link to={`/edit/${students.id}`} className="btn btn-info">
          Modifier
        </Link>
      </div>
    </div>
  );
}

export default Read;
