import * as React from "react";
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
export default TestRoute;

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
    <div>
      <main>
        <h2>Who are we?</h2>
        <p>das</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}
