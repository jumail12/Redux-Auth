import logo from './logo.svg';
import './App.css';
import SignUp from './comp/SignUp';
import {Route,Routes} from "react-router-dom"
import Login from './comp/Login';
import MainPage from './comp/MainPage';
import CreateContact from './comp/CreateContact';

function App() {
  return (
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<SignUp/>}/>
    <Route path='/main' element={<MainPage/>} />
    <Route path='/create' element={<CreateContact/>} />
  </Routes>
  );
}

export default App;
