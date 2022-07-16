
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Quiz1 from './components/quiz1/Quiz1.jsx';
import Quiz2 from './components/quiz2/Quiz2.jsx';
import Summary from './pages/summary/Summary.jsx';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quiz1' element={<Quiz1/>}/>
      <Route path='/quiz2' element={<Quiz2/>}/>
      <Route path='/summary' element={<Summary/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
