import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Basic from './components/basic/Basic';
import Advanced from './components/advanced/Advanced';
import Home from './components/Home/Home';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/basic" element={<Basic></Basic>} />
      <Route path="/advanced" element={<Advanced></Advanced>} />

    </Routes>
   </BrowserRouter>
  );
}

export default App;
