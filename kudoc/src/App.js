import './App.css';
import Mainpage from "./components/mainpage";
import Mypage from "./components/mypage";
import Settingspage from "./components/Settingspage";
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact={ true } component={Mainpage} />
        <Route path="/mypage" component={Mypage}/>
        <Route path="/settings" component={Settingspage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
