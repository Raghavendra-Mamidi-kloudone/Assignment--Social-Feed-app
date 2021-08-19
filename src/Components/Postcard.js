import logo from '../logo.svg';
import '../App.css';
import cardimg1 from '../cardimg1.png';
import {useState} from 'react';


const commentsarray=[]

const Postcard = () => {
  const[email, setEmail]= useState("");
  const Addcomment =()=>{
    debugger;
    console.log(email);
  }
   
  return (
    <div className="App">
<div class="container">
    <div class="row rowpostcss">
      <div class="col-md-3">
        {/* sl */}

      </div>
      <div class="col-md-5 Addcss">
    <h5 className="Addcss1">Sanara starck</h5>
    <span><img   className="profilecss1" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000"/></span>&nbsp;&nbsp;<span className="whatcss">June</span>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
    <img src={cardimg1} className="cardimg1css"/>
    <br/>
    <span>jj</span>
    <span>jj</span>
    <br/>
    <span>
      <img   className="profilecss2" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000"/></span>&nbsp;&nbsp;
      <span className="whatcss">
         <input  onChange={(e)=>setEmail(e.target.value)} value={email} className="inputcss" placeholder="Comments" type="text"/> 
        </span>
    <span>
       <button onClick={Addcomment} className="addpostcss" >Add</button>
      </span>
      </div>
      <div class="col-md-2">
        {/* skn */}

      </div>
      </div>
    </div>



























     {/* <div class="container">
    <div class="row">
      <div class="col-md-2">
        sl

      </div>
      <div class="col-md-8">
    <h1>ADD NEW POST FROM HERE</h1>
    <span className="profilecss"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000"/></span><span>what's happening?</span>
      </div>
      <div class="col-md-2">
        skn

      </div>
      </div>
    </div> */}
    </div>
  );
}
export default Postcard;