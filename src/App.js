
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import Hats from './pages/Hats/Hats'
import { Route,BrowserRouter ,Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter >
  <Routes>
      {console.log("caledddd2222")}
      <Route path='/' element={<HomePage/>}/>
      <Route path='/hats' element={<Hats/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
