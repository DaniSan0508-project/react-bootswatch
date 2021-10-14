import './App.css';

import Navbar from './components/navbar';
import Routes from './routes/Routes';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container">
      <HashRouter>
        <Navbar/>
        <Routes/>
      </HashRouter>
      </div>
    </>
  );
}

export default App;
