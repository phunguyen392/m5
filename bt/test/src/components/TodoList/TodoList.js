import { useState, useEffect } from "react";
import React from "react";
import Job from "../../models/Job";
import { Link } from "react-router-dom";

const TodoList = (props) => {
  //lv voi dl
  const [items, setItems] = useState([]);
  //chay 1 lan
  useEffect(() => {
    //goi api co dl tra ve
    Job.all().then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <div>
      <h1>JobList</h1>
      <table className="container" border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Job</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {items.length
            ? items.map((item) => (
                <tr >
                  <td> {item.id} </td>
                  <td> {item.job} </td>
                  <td> {item.status} </td>
                  <td>
                    {" "}
                    <Link to={"edit/" + item.id}>Edit</Link>{" "}
                  </td>
                  <td>
                    {" "}
                    <Link to={"delete/" + item.id}>Delete</Link>{" "}
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
