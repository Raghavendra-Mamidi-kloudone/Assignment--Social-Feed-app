import logo from '../logo.svg';
import '../App.css';
import cardimg1 from '../cardimg1.png';
import {useState} from 'react';
import { FaRegComment } from "react-icons/fa";

import { BsHeart } from "react-icons/bs";



const Postcard = () => {
  const [count, setCount] = useState(0);
    const [email, setEmail]= useState("");
    //const [commentsarray, setCommentsarray]= useState([]);
    const Postdata=[  
{postid:1334,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",img:"https://media.istockphoto.com/photos/senior-man-sitting-on-bench-picture-id499841195?k=6&m=499841195&s=612x612&w=0&h=jKSBWdPV1CexxCW1uvOwwFmNTaO0URoCVHKNjRDMIlE=",name:"Sanara starck",date:"June",profileimg:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000",comments:[] },
{postid:5568,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",img:"https://images.unsplash.com/photo-1569992274375-e56b14e234f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2Fsa2luZyUyMGluJTIwcGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"James wleks",date:"July",profileimg:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",comments:[] },
{postid:3345,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",img:"https://image1.masterfile.com/getImage/NjEwMi0wODU1OTI4OGVuLjAwMDAwMDAw=AN9UcQ/6102-08559288en_Masterfile.jpg",name:"Balis uslls",date:"August",profileimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRukY7latzWBcyjOCAHRY2cPt7Yq-Mhh2CX4K08vPebqQcfANxGNxxHm553M-MxMaeP6sU&usqp=CAU",comments:[] },
{postid:8890,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5S7edpMm4qOhwnM7JDLuswoz-PAaQwFlGjg&usqp=CAU",name:"jjyde jasuk",date:"July",profileimg:"https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",comments:[] },
{postid:4456,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyH4JgRrSOo4rhZgPai3H9VAU-L1cFxwuLg&usqp=CAU",name:"kallsy slol",date:"July",profileimg:"https://st3.depositphotos.com/9881890/16378/i/600/depositphotos_163785870-stock-photo-blonde-smiling-businesswoman.jpg",comments:[] },
    ]
   const[ptstate, setPtstate]= useState(Postdata);

  
  const Addcomment =(e)=>{
    debugger;
    //var ind = findIndex(ptstate, function(o) { return o.postid == e.target.id; });
    var index = Postdata.findIndex(function(item){ return item.postid == e.target.id})
    console.log(index);
    var z =email;
    const newEntry= {email};
    let newArr = [...ptstate]; // copying the old datas array
    var x=newArr[index].comments
    var y= x.push(email);
  newArr[index].comments = x; // replacing e.target.value with whatever i want to change it to


  setPtstate(newArr);
    //setPtstate([...ptstate[0].comments, newEntry]);
    setEmail("");
    console.log(e.target.id);
    console.log(ptstate);
    console.log(Postdata);
    /*console.log(commentsarray);
    console.log(z);
    console.log(email);
    console.log(commentsarray.length);*/
  }




   
  return (
    <div className="App">
<div class="container">
    <div class=" rowpostcss">
{ptstate.map((post)=>{
return<div class="row"> 
  <div class="col-md-3">

      </div>
      <div class="col-md-5 Addcss  rowmargintwo" style={{height:'0%'}}>
    <h5 className="Addcss1">{post.name}</h5>
    <span><img   className="profilecss1" src={post.profileimg}/></span>&nbsp;&nbsp;<span className="whatcss">{post.date}</span>
    <p>{post.description}</p>
    <img src={post.img} className="cardimg1css"/>
    <br/>
    <span  className="iconcss" onClick={()=>setCount(count+1)}><BsHeart/></span>{count}&nbsp;&nbsp;&nbsp;&nbsp;
   <span><FaRegComment/>{post.comments.length}</span> 
    <br/>
    <span>
      <img   className="profilecss2" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000"/></span>&nbsp;&nbsp;
      <span className="whatcss">
         <input  onChange={(e)=>setEmail(e.target.value)} value={email} className="inputcss" placeholder="Comments" type="text"/> 
        </span>
    <span>
       <button onClick={Addcomment} className="addpostcss" id={post.postid}>Add</button>
      </span>
       {post.comments.map((commentsadded)=>{
return <div class="col-md-6">
    <span className="commentsprofile"><img   className="profilecsscomment" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000"/></span><span >{commentsadded}</span>
</div>
    })} 
      </div>
      
      <div class="col-md-2">
        {/* skn */}

      </div>


      </div>
})}
     
      
     
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