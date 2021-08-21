import logo from '../logo.svg';
import '../App.css';

const Header = () => {
  return (
    <div className="App">
     <div class="container">
    <div class="row">
      <div class="col-md-3">
        {/* sl */}

      </div>
      <div class="col-md-5 Addcss rowmarginone">
    <h3>ADD NEW POST FROM HERE</h3>
    <span><img   className="profilecss" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000"/></span>&nbsp;&nbsp;<span className="whatcss">what's happening?</span>
      </div>
      <div class="col-md-2">
        {/* skn */}

      </div>
      </div>
    </div>
    </div>
  );
}

export default Header;