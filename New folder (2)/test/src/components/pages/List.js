import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List(props) {
  // Làm việc với dữ liệu
  const [items, setItems] = useState([]);
  // Chạy 1 lần duy nhất
  useEffect(() => {
    // Gọi API, có dữ liệu trả về
    let products = localStorage.getItem("products");
    if (products) {
      products = JSON.parse(products);
    } else {
      products = [];
    }
    setItems(products);
  }, [items]);

  const handleDelete = (id) => {
    let new_items = [...items];
    new_items.splice(id, 1);
    setItems(new_items);
    // Chuyển đổi mảng sang json
    new_items = JSON.stringify(new_items);
    // Lưu vào local storage
    localStorage.setItem("products", new_items);
  };

  return (
    <div className="container">
      
            <h1 className="heading">
            List
            </h1>
            <div className="text-right">
        <Link className="btn btn-primary" style={{ color:"red",textAlign:"right" }} to={"/create"}>Create</Link>
        </div>
        <table className="table" border={1}>
          <thead>
            <tr>
              <th> ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.length
              ? items.map((item, key) => (
                  <tr key={key}>
                    <td> {key} </td>
                    <td> {item.name} </td>
                    <td> {item.price} </td>
                    <td>
                      {" "}
                      <Link className="btn btn-primary" to={"Edit/" + key}>
                        Edit
                      </Link>{" "}
                    </td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(key)}
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
  );
}

export default List;
