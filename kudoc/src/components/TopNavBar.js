import { Link } from "react-router-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import Mypage from "./mypage";

// topnavbar function
function TopNavBar() {
    return(
      <nav>
        <div className="topNaviBoxContainer">
          <div className="topNaviBox1">
            <Link className="tologin" to="/login">로그인</Link>
            <div><Link className="tosignup" to="">회원가입</Link></div>
          </div>
        </div>
      </nav>
    );
  }

export default TopNavBar