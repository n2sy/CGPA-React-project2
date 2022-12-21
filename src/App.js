import logo from './logo.svg';
import './App.css';
import Cvtheque from './pages/Cvtheque';
import { CandidatContextProvider } from './store/candidats-context';

function App() {
  return (
    <CandidatContextProvider>
      <Cvtheque></Cvtheque>
    </CandidatContextProvider>
  );
}

export default App;
