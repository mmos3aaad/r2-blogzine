import { Component } from "react";
import Navbar from "./component/Navbar";
import "./App.css";
import "./sass/main.css";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";

class App extends Component{
  render(){
    return<BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/features" element={<Features/>}/>
      </Routes>
     </BrowserRouter>
  }
}
export default App;