
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import DisplayCollections from './pages/DisplayCollections'
import Hats from './pages/Hats/Hats'
import Jackets from './pages/Jackets'
import Sneakers from './pages/Sneakers'
import Womens from './pages/Womens'
import Mens from './pages/Mens'
import { Route,BrowserRouter ,Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter >
  <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<DisplayCollections/>}/>
      <Route path='/hats' element={<Hats/>}/>
      <Route path='/jackets' element={<Jackets/>}/>
      <Route path='/sneakers' element={<Sneakers/>}/>
      <Route path='/womens' element={<Womens/>}/>
      <Route path='/mens' element={<Mens/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
