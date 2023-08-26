import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-transform px-5 md:px-[10%]">
  <div>
    <Link className="btn normal-case text-xl">daisyUI</Link>
  </div>
  <div className="hidden lg:flex mx-auto">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/" >HOME</Link></li>
        <li tabIndex={0}>
          <details>
            <summary>Movie</summary>
            <ul className="p-2 z-[100] w-60 dropdown">
              <li><Link to="/trending" >Trending</Link></li>
              <li><Link to="/top_rated" >Top Rated</Link></li>
              <li><Link to="/popular" >POPULAR</Link></li>
              <li><Link to="/now-playing" >Now Playing</Link></li>
              <li><Link to="/upcoming" >Up Coming</Link></li>
            </ul>
          </details>
        </li>
        <li><Link to="/people" >People</Link></li>
    </ul>
  </div>
  <div className="dropdown dropdown-end ml-auto">
      <label tabIndex={0} className="btn lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[100]">
      <li><Link to="/" >HOME</Link></li>
        <li tabIndex={0}>
          <details>
            <summary>Movie</summary>
            <ul className="p-2 z-[100] w-60 dropdown">
              <li><Link to="/trending" >Trending</Link></li>
              <li><Link to="/top_rated" >Top Rated</Link></li>
              <li><Link to="/popular" >POPULAR</Link></li>
              <li><Link to="/now-playing" >Now Playing</Link></li>
              <li><Link to="/upcoming" >Up Coming</Link></li>
            </ul>
          </details>
        </li>
        <li><Link to="/people" >People</Link></li>
      </ul>
    </div>
            </div>
        </div>
    );
};

export default Header;