import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import NoDataFound from './Components/NoDataFound/NoDataFound';
import Review from './Components/Review/Review';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='*' element={<NoDataFound></NoDataFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
