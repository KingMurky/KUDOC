import { Link } from "react-router-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import Mypage from "./mypage";

function BottomNavBar() {
    return(
      <nav>
        <div className="bottomNaviBoxContainer">
          <div className="bottomNaviBox1">
            <Link className="toSettings" to="/settings">설정</Link>
            <div><Link className="toMypage" to="/mypage">자취</Link></div>
          </div>
        </div>
      </nav>
    );
  }

export default BottomNavBar