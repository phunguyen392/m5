import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

function List() {
  return (
    <div>
      <h1>Đây là list</h1>
      <nav>
        <Link to="/create">Create</Link><br/>
        <Link to="/edit">Edit</Link>

      </nav>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<List />} />
      </Routes>
    </div>
  );
}

function Create() {
  return (
    <div>
      <h2>Đây là Create</h2>
      <nav>
      </nav>
    </div>
  );
}

export default List;