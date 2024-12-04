import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8082/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://127.0.0.1:8082/delete/" + id)
      .then((res) => {
        console.log(res);
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Liste d'étudiants</h2>
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            Créer +
          </Link>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Mail</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((students, index) => {
              return (
                <tr key={index}>
                  <td>{students.id}</td>
                  <td>{students.name}</td>
                  <td>{students.mail}</td>
                  <td>
                    <Link
                      to={`/read/${students.id}`}
                      className="btn btn-sm btn-info"
                    >
                      Lire
                    </Link>
                    <Link
                      to={`/edit/${students.id}`}
                      className="btn btn-sm btn-primary mx-2"
                    >
                      Modifier
                    </Link>
                    <button
                      onClick={() => handleDelete(students.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
