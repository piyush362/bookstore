import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import FileUpload from './components/FileUpload';
import Home from './components/homepage/Home';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fileupload' element={<FileUpload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
