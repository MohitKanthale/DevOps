 import logo from './logo.svg';
 import './index.css';
 import Home from './pages/Home';

// function App() {
//   return (
//     <div className="App">
//       <Home/>
//     </div>
//   );
// }

//  export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (

    <div className="App">
       <Home/>
     </div>,

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/action" element={<CategoryPage category="Action" />} />
        <Route path="/category/thriller" element={<CategoryPage category="Thriller" />} />
        <Route path="/category/drama" element={<CategoryPage category="Drama" />} />
        <Route path="/category/romance" element={<CategoryPage category="Romance" />} />
        <Route path="/category/comedy" element={<CategoryPage category="Comedy" />} />
      </Routes>
    </Router>
  );
}

export default App;