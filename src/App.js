import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/shared/Header';
import Home from './component/Home';
import MovieDetails from './component/MovieDetails';
import Popular from './component/Popular';
import Upcoming from './component/Upcoming';
import TopRated from './TopRated';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header className='fixed top-0'/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/popular" element={<Popular/>}></Route>
          <Route path="/upcoming" element={<Upcoming/>}></Route>
          <Route path="/top_rated" element={<TopRated/>}></Route>
          <Route path="/movie/:id" element={<MovieDetails/>} />
          <Route path="/movies/:type" element={<h1>Movie type</h1>} />
          <Route path="/*" element={<h1>Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
