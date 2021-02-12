import { Link } from "react-router-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import Mypage from "./mypage";

// topnavbar function
function TopNavBar() {
    return(
      <nav>
        <div className="topNaviBoxContainer">
          <div className="topNaviBox1">설정</div>
          <div className="topNaviBox2"><Link to="/mypage">마이페이지</Link></div>
        </div>
      </nav>
    );
  }

export default TopNavBar