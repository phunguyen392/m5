import * as React from "react";
<<<<<<< HEAD
import { Routes, Route, Link } from "react-router-dom";

 function TestRoute() {
  return (
    <div className="TestRoute">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
export default TestRoute

function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }
  
  function About() {
    return (
      <>
=======
import {Routes,Route,Link} from "react-router-dom";




function TestRoute(){
return(
    <div>
        <h1>day la react route</h1>
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="about" element={< About />} />
        </Routes>
    </div>
);

}


function Home() {
    return (
      <div>
        <main>
          <h2>day la trang chu</h2>
        </main>
        <nav>
          <Link to="/about">About1</Link>
        </nav>
      </div>
    );
  }


  function About() {
    return (
      <div>
>>>>>>> 1e6c9274619dc436baca3ddbc96ee17ea9094f3a
        <main>
          <h2>Who are we?</h2>
          <p>
            React Router is a lightweight, fully-featured routing library for the React JavaScript library
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
<<<<<<< HEAD
      </>
    );
  }
=======
      </div>
    );
  }

export default TestRoute;
>>>>>>> 1e6c9274619dc436baca3ddbc96ee17ea9094f3a
