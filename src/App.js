import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Header from './componentes/Header';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <main>
          <Header/>
        </main>
      </div>
    </Router>
  );
}

export default App;
