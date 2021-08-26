import logo from '../logo.svg';
import '../App.css';
import cardimg1 from '../cardimg1.png';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { FaRegComment } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { GiWhiteBook } from 'react-icons/gi';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import { AiOutlineHeart } from "react-icons/ai";



const Postcard = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('white');
    const [email, setEmail]= useState("");
    const[news, setNews]= useState([]);
    const[group, setGroup]= useState([]);
    const[people, setPeople]= useState([]);
    const[Trend, setTrend]= useState([]);
    const[place, setPlace]= useState([]);

    debugger;

console.log(news);
console.log(group);
//News
    useEffect(()=>{

      axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e972bcd3d9a14d8595e01a34885fc7fa')
      .then(res=>{
        debugger;
        console.log(res);
        setNews(res.data.articles)
      })
      .catch(err=>{
        console.log(err);
      })
    },[])
//groups
    useEffect(()=>{

      axios.get('https://run.mocky.io/v3/5f0e9bd0-7464-4c57-a136-7976ff416447')
      .then(res=>{
        debugger;
        console.log(res);
        setGroup(res.data.group)
        console.log(setGroup);
      })
      .catch(err=>{
        console.log(err);
      })
    },[])
//people
    useEffect(()=>{
      axios.get('https://run.mocky.io/v3/62c35424-2ed5-49d7-8d83-82feaac582fd')
      .then(res=>{
        debugger;
        console.log(res);
setPeople(res.data.people);
debugger;
console.log(setPeople);

      })
      .catch(err=>{
console.log(err);
      })
    },[])
//trends
  useEffect(()=>{
axios.get('https://run.mocky.io/v3/f5cf83e9-e8ba-48a2-88d5-e25b24bed05d')
.then(res=>{
  debugger;
  console.log(res)
setTrend(res.data.trends)
})
.catch(err=>{
console.log(err);

})
  },[])

//places

useEffect(()=>{
axios.get('https://run.mocky.io/v3/5c9beee3-3991-46f2-a277-e25d0af73561')
.then(res=>{
console.log(res);
setPlace(res.data.places)
})
.catch(err=>{
  console.log(err);
})
},[])

    
    //const [commentsarray, setCommentsarray]= useState([]);
    const Postdata=[  
{postid:1334,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",img:"https://media.istockphoto.com/photos/senior-man-sitting-on-bench-picture-id499841195?k=6&m=499841195&s=612x612&w=0&h=jKSBWdPV1CexxCW1uvOwwFmNTaO0URoCVHKNjRDMIlE=",name:"Sanara starck",date:"June",profileimg:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000",comments:[],like:233},
{postid:5568,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",img:"https://images.unsplash.com/photo-1569992274375-e56b14e234f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2Fsa2luZyUyMGluJTIwcGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"James wleks",date:"July",profileimg:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",comments:[],like:521},
{postid:3345,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",img:"https://image1.masterfile.com/getImage/NjEwMi0wODU1OTI4OGVuLjAwMDAwMDAw=AN9UcQ/6102-08559288en_Masterfile.jpg",name:"Balis uslls",date:"August",profileimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRukY7latzWBcyjOCAHRY2cPt7Yq-Mhh2CX4K08vPebqQcfANxGNxxHm553M-MxMaeP6sU&usqp=CAU",comments:[],like:234},
{postid:8890,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5S7edpMm4qOhwnM7JDLuswoz-PAaQwFlGjg&usqp=CAU",name:"jjyde jasuk",date:"July",profileimg:"https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",comments:[],like:0},
{postid:4456,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyH4JgRrSOo4rhZgPai3H9VAU-L1cFxwuLg&usqp=CAU",name:"kallsy slol",date:"July",profileimg:"https://st3.depositphotos.com/9881890/16378/i/600/depositphotos_163785870-stock-photo-blonde-smiling-businesswoman.jpg",comments:[],like:345},
{postid:5568,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",img:"https://images.unsplash.com/photo-1569992274375-e56b14e234f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2Fsa2luZyUyMGluJTIwcGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"James wleks",date:"July",profileimg:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",comments:[],like:0},
{postid:8890,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5S7edpMm4qOhwnM7JDLuswoz-PAaQwFlGjg&usqp=CAU",name:"jjyde jasuk",date:"July",profileimg:"https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",comments:[],like:600},
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
    console.log(setColor);
    /*console.log(commentsarray);
    console.log(z);
    console.log(email);
    console.log(commentsarray.length);*/
  }


const  Countfuction = (e) => {
  debugger;
console.log(e.target.id);
//console.log('clikedagain');
var index = Postdata.findIndex(function(item){ return item.postid == e.target.id})//finded id
//console.log(index);
let newArr = [...ptstate];//Spread operator
newArr[index].like = newArr[index].like+1 ;  // replacing e.target.value with whatever i want to change it to
  setPtstate(newArr);
//var x=newArr[index].like+1;

//console.log(newArr);
//setCount(count+1);
}


  return (
    <div className="App">
<div class="container">
    <div class=" rowpostcss">
    <div class="row">

    <div class="col-md-3">
    <div class="row" style={{backgroundColor:'white'}}>
          <div class="col-md-6">
<p style={{fontSize:'small' }}><b style={{marginLeft:'-39%'}}>Trends</b></p>
          </div>

          <div class="col-md-6" style={{color:'#ff6204'}}>
change         
 </div>
{Trend.map((trendss)=>{
return <div class="row"style={{color:'#ff6204;'}}>
<div class="col-md-6">
 <span style={{marginLeft:'-11%'}}>#</span><span>{trendss.Name}</span>

</div>
<div class="col-md-6">

</div>

</div> 
})}
 </div>

<br/>
        {/* places for you */}
        <div class="row" style={{backgroundColor:'white'}}>
          <div class="col-md-6">
<p style={{fontSize:'small'}}><b>Places for you</b></p>
          </div>

          <div class="col-md-6" style={{color:'#ff6204'}}>
View all         
 </div>
 {place.map((places)=>{
return <div class="row">
  <div class="col-md-4">
  <img className="peopleimg" src={places.img}/>

  </div>
  <div class="col-md-6">
 <h6 style={{color:'#ff6204'}}>{places.Name}</h6> 
<p>{places.title}</p>
</div>

<div class="col-md-2">
<AiOutlineHeart style={{color:'red'}}/>

  </div> 

</div>
})}
        </div>
        <br/>
{/* groups for you */}

<div class="row" style={{backgroundColor:'white'}}>
          <div class="col-md-6">
<p style={{fontSize:'small'}}><b>Places for you</b></p>
          </div>

          <div class="col-md-6" style={{color:'#ff6204'}}>
View all         
 </div>
 {group.map((groups)=>{
return <div class="row">
  <div class="col-md-4">
  <img className="peopleimg" src={groups.img}/>

  </div>
  <div class="col-md-6">
 <h6 style={{color:'#ff6204'}}>{groups.title}</h6> 
<p>{groups.members}</p>
</div>

<div class="col-md-2">
<button className="addcssgroup">Add</button>

  </div> 

</div>
})}
        </div>


  </div>

  <div class="col-md-5 Addcss backcss  rowmargintwo" style={{height:'0%',backgrounColor:'#fff'}}>
    <div class="row headerscss">
      <h4 style={{marginLeft:'-23%'}}>Add new post here</h4>
      <div class="row">
<div class="col-md-6">
<span><img className="profilecss" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000"/></span>
<span>what's happening?</span>
</div>
<div class="col-md-6">

</div>
      </div>
    {/* <h3>ADD NEW POST FROM HERE</h3>
    <span><img className="profilecss" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000"/></span>&nbsp;&nbsp;<span className="whatcss">what's happening?</span> */}
    </div>
    <br/>
{ptstate.map((post)=>{
return <> 
 <div class="row">
   <div>
    <h5 className="Addcss1">{post.name}</h5>
    <span><img   className="profilecss1" src={post.profileimg}/></span>&nbsp;&nbsp;<span className="whatcss">{post.date}</span>
    </div>
    <p>{post.description}</p>
    <img src={post.img} className="cardimg1css"/>
    <br/>
    <div class="row">
      <div class="col-md-6">
    <span  className=""><BsHeart onClick={Countfuction}  id={post.postid}/></span>{post.like}&nbsp;&nbsp;&nbsp;&nbsp;
    <span><FaRegComment/>{post.comments.length}</span>
    </div>
    <div class="col-md-6">
    
   </div>
    <br/>
    </div>
    <div>
    <span>
      <img   className="profilecss2" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000"/></span>&nbsp;&nbsp;
      <span className="whatcss">
         <input  onChange={(e)=>setEmail(e.target.value)} value={email} className="inputcss" placeholder="Write Comments...." type="text"/> 
        </span>
    <span>
       <button onClick={Addcomment} className="addpostcss" id={post.postid}>Add</button>
      </span>
      </div>
      
       {post.comments.map((commentsadded)=>{
return <div class="col-md-6">
    <span className="commentsprofile"><img   className="profilecsscomment" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000"/></span><span >{commentsadded}</span>
</div>

    })} 
      <hr/>
    
      </div>
      </>
})}
  </div>
      <div class="col-md-3">
        {/* skn */}
        <div class="row" style={{backgroundColor:'white'}}>
          <div class="col-md-6">
<p style={{fontSize:'small'}}><b>Pepole near by you</b></p>
          </div>

          <div class="col-md-6" style={{color:'#ff6204'}}>
View all         
 </div>
 {people.slice(0,4).map((peoples)=>{
return <div class="row peoplescssrow">

   <div class="col-md-6">
    <img className="peopleimg" src={peoples.img}/>

  </div>
  <div class="col-md-6">
<h6>{peoples.Name}</h6>
<button className="peoplebtn">follow</button>
</div>

</div>

})}   <hr/>
        </div>
      <br/>
        <div class="row" style={{backgroundColor:'white'}}>
        <h5 className="newsheadercss">News</h5>
      <br/>
        {news.slice(16,19).map((newsapi)=>{
 return <div>
<p  className="newsparacss">{newsapi.title}</p>
        </div>
        })}
        <hr/>
        </div>
      
        
      <br/>

      </div>
      
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



