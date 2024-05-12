import React from "react";
import user from "../data/user";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home user/>
      <About />
    </div>
  );
}

export default App;