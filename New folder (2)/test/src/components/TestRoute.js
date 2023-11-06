import * as React from "react";
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
        <main>
          <h2>Who are we?</h2>
          <p>
            React Router is a lightweight, fully-featured routing library for the React JavaScript library
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    );
  }

export default TestRoute;