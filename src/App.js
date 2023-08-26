import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/shared/Header';
import MovieDetails from './component/MovieDetails';
import Popular from './component/Movie/Popular';
import TopRated from './component/Movie/TopRated';
import Upcoming from './component/Movie/Upcoming';
import Trending from './component/Movie/Trending';
import Home from './component/home/Home';
import NowPlaying from './component/Movie/NowPlaying';
import People from './component/People/People';
import PeopleDetails from './component/People/PeopleDetails';

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
          <Route path="/trending" element={<Trending/>}></Route>
          <Route path="/now-playing" element={<NowPlaying/>}></Route>
          <Route path="/movie/:id" element={<MovieDetails/>} />
          <Route path="/people" element={<People/>}></Route>
          <Route path="/people/:id" element={<PeopleDetails/>} />
          <Route path="/*" element={<h1>Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
