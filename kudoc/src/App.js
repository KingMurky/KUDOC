import './App.css';
import Mainpage from "./components/mainpage";
import Mypage from "./components/mypage";
import Settingspage from "./components/Settingspage";
import { Route, BrowserRouter } from 'react-router-dom';
import Create from "./components/Create";
import loginPage from "./components/loginpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact={ true } component={Mainpage} />
        <Route path="/mypage" exact={ true }component={Mypage}/>
        <Route path="/settings" component={Settingspage}/>
        <Route path="/mypage/create" component={Create}/>
        <Route path="/login" component={loginPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
