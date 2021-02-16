import './App.css';
import Header from "./components/Header";
import TopNavBar from "./components/TopNavBar";
import Mainpage from "./components/mainpage";
import Mypage from "./components/mypage";
import settingspage from "./components/settingspage";
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact={ true } component={Mainpage} />
        <Route path="/mypage" component={Mypage}/>
        <Route path="/settings" component={settingspage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
