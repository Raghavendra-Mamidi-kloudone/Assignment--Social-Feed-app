import logo from '../logo.svg';
import '../App.css';
import cardimg1 from '../cardimg1.png';
import {useState} from 'react';
import { RiContactsBook2Line } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageEdit } from "react-icons/bi";
import { GiAbstract003 } from "react-icons/gi";





const Navbar = () => {
return(
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="threedivcss">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"><AiOutlineHome className="homecss"/>Home <span class="sr-only"></span></a>
      </li>&nbsp;&nbsp;&nbsp;&nbsp;
      <li class="nav-item">
        <a class="nav-link" href="#"><RiContactsBook2Line className="homecss"/>Contact</a>
      </li>&nbsp;&nbsp;&nbsp;&nbsp;
      <li class="nav-item">
        <a class="nav-link" href="#"><BiMessageEdit className="homecss"/>Message</a>
      </li>
    </ul>   
    </div>
    <span><h5 className="titlenav">Tyrstrah</h5></span>
    <span><input className="searchnav" type="text" placeholder="search"/></span>
    <span><img  className="imgnav" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000"/></span>
    <span><button className="buttonpostnav">Add Post</button></span>
  </div>
</nav>
</div>
);
}
export default Navbar;