import './App.css';

import Navbar from './components/navbar';
import Routes from './routes/Routes';

function App() {
  return (
    <>
      <div className="container">
        <Navbar/>
        <Routes/> 
      </div>
    </>
  );
}

export default App;
