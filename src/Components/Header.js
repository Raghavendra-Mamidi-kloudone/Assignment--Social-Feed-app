import logo from '../logo.svg';
import {useState,useEffect} from 'react';
import axios from 'axios';
import '../App.css';

const Header = () => {


  const[news, setNews]= useState([]);
  debugger;

console.log(news);
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
    

    
  return (
    <div className="App">
     <div class="container">
    <div class="row">
      <div class="col-md-3">
       {/* sl */}
      </div>
      <div class="col-md-5 Addcss rowmarginone" style={{marginBottom:'auto'}}>
    <h3>ADD NEW POST FROM HERE</h3>
    <span><img   className="profilecss" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000"/></span>&nbsp;&nbsp;<span className="whatcss">what's happening?</span>
      </div>
      <div class="col-md-3 rowthree">
        {/* skn */}
        <h5 className="newsheadercss">News</h5>
      <br/>
        {news.slice(16,20).map((newsapi)=>{
 return <div>
<p  className="newsparacss">{newsapi.title}</p>
        </div>
        })}
        <hr/>
        
      <br/>

      </div>
      </div>
    </div>
    </div>
  );
}

export default Header;