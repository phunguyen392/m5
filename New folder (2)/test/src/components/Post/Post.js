import { useState, useEffect } from "react";
import React from "react";
import Book from "../../models/Book";
import { Link } from "react-router-dom";

const Post = (props) => {
  //lv voi dl
  const [items, setItems] = useState([]);
  //chay 1 lan
  useEffect(() => {
    //goi api co dl tra ve
    Book.all().then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>PostList</h1>
      <Link className="btn btn-success" to={"Create"}>
      Add a new Book
      </Link>
      <table className="table" border="">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {items.length
            ? items.map((item) => (
                <tr>
                  <td> {item.id} </td>
                  <td> {item.title} </td>
                  <td> {item.quantity} </td>
                  <td>
                    {" "}
                    <Link className="btn btn-info" to={"edit/" + item.id}>Edit</Link>{" "}
                  
                    {" "}
                    <Link className="btn btn-danger" to={"delete/" + item.id}>Delete</Link>{" "}
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Post;
