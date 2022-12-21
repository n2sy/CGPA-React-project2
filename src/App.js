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

function App() {
  return (
    <CandidatContextProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="cv" element={<Cvtheque></Cvtheque>}></Route>
          <Route path="cv/add" element={<Add></Add>}></Route>
          <Route path="cv/:id" element={<Infos></Infos>}></Route>
          <Route path="cv/:id/edit" element={<Update></Update>}></Route>
        </Routes>
      </BrowserRouter>


    </CandidatContextProvider>
  );
}

export default App;
