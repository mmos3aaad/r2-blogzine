import {Link} from "react-router-dom";
import logo from "../images/logo.svg";
function Navbar() {
    return<div>
      <div className="preNav">
        <a href="#">About</a>
        <a href="#">Form</a>
        <a href="#">Buy Now!</a>
        <a href="#">Login / Join</a>
        <button className="blink"><i class="bi bi-facebook"></i> </button>
        <button><i class="bi bi-twitter"></i> </button>
        <button><i class="bi bi-linkedin"></i> </button>
        <button><i class="bi bi-youtube"></i> </button>
        <hr/>
      </div>
      <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/"> <img src={logo}/> </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Home
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Home Default</a></li>
            <li><a class="dropdown-item" href="#">Home Lazy Load</a></li>
            <li><a class="dropdown-item" href="#">Magazine CLassic</a></li>
            <li><a class="dropdown-item" href="#">Magazine</a></li>
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Pages
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Home Default</a></li>
            <li><a class="dropdown-item" href="#">Home Lazy Load</a></li>
            <li><a class="dropdown-item" href="#">Magazine CLassic</a></li>
            <li><a class="dropdown-item" href="#">Magazine</a></li>
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Post
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Home Default</a></li>
            <li><a class="dropdown-item" href="#">Home Lazy Load</a></li>
            <li><a class="dropdown-item" href="#">Magazine CLassic</a></li>
            <li><a class="dropdown-item" href="#">Magazine</a></li>
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Lifestyle
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Home Default</a></li>
            <li><a class="dropdown-item" href="#">Home Lazy Load</a></li>
            <li><a class="dropdown-item" href="#">Magazine CLassic</a></li>
            <li><a class="dropdown-item" href="#">Magazine</a></li>
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        </ul>
       <button className="btn btn-danger">Subscribe!</button>
       <a href="#" className="a1"> <i class="bi bi-search"></i> </a>
       <a href="#" className="a1"> <i class="bi bi-list-nested"></i> </a>
      </div>
    </div>
    </nav>
    <div className="trending">
          <div className="trendbox">Trending:</div>
          <a href="#" className="hvr-underline-from-left">The most common Buisness debate isn't black or white as you might think.</a>
          <button className="left"> <i class="bi bi-chevron-left"></i> </button>
          <button> <i class="bi bi-chevron-right"></i> </button>
    </div>
    </div>
}
export default Navbar;