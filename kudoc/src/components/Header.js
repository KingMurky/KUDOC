import { Link } from "react-router-dom";
import './components.css';

function Header() {
    return(
      <header>
        <div className="HeaderBar">
          {/* 로고가 들어가는 부분. 이미지로 처리할 지, 폰트로 처리할 지는 후에 결정*/}
          <Link to="/">KUDOC</Link>
        </div>
      </header>
    );
}

export default Header;
