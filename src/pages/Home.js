import Card from "../component/Card";
import { Component } from "react";
import Navbar from "../component/Navbar";
import Articles from "../component/articles";
import Aside from "../component/aside";
import Carousel from "../component/Carousel";
import Footer from "../component/Footer";
class Home extends Component{
    render(){
    return<div>
     <div className="container">
      <Navbar/>
      <Articles/>
      <Aside/>
      <div className="clear"></div>
      <Carousel/>    
    </div>
    <Footer/>
    </div>
  }}
  export default Home;