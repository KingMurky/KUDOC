import './App.css';

// headerbar function
function Header() {
  return(
    <header>
      <div className="HeaderBar">
        {/* 로고가 들어가는 부분. 이미지로 처리할 지, 폰트로 처리할 지는 후에 결정*/}
        KUDOC
      </div>
    </header>
  );
}

// topnavbar function
function TopNavBar() {
  return(
    <nav>
      <div className="topNaviBoxContainer">
        <div className="topNaviBox1">설정</div>
        <div className="topNaviBox2">마이페이지</div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TopNavBar></TopNavBar>
    </div>
  );
}

export default App;
