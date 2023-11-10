import React, { useState } from "react";
import {Formik} from 'formik'; 

function MyForm1() {
  const [username, setUsername] = useState("");
  const handleChange = event => setUsername(event.target.value);
  let header;
  if (username) {
    header = <h1>Helloooo {username}</h1>;
  } else header = "";
  return (
    <div>
      <form>
        {header}
        <p>Enter your name:</p>
        <input type="text" value={username} onChange={handleChange} />
      </form>
    </div>
  );
}

export default MyForm1;