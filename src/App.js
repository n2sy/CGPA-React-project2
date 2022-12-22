import logo from './logo.svg';
import './App.css';
import Cvtheque from './pages/Cvtheque';
import { CandidatContextProvider } from './store/candidats-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Infos from './components/Infos';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Update from './components/Update';
import Add from './pages/Add';
import Login from './pages/Login';
import { LoginContextProvider } from './store/login-context';
import Watch from './pages/Watch';

function App() {
  return (
    <LoginContextProvider>
      <CandidatContextProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="cv">
              <Route path="" element={<Cvtheque></Cvtheque>}></Route>
              <Route path="add" element={<Add></Add>}></Route>
              <Route path=":id" element={<Infos></Infos>}></Route>
              <Route path=":id/edit" element={<Update></Update>}></Route>

            </Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="watch" element={<Watch></Watch>}></Route>
          </Routes>
        </BrowserRouter>
      </CandidatContextProvider >
    </LoginContextProvider>


  );
}

export default App;
