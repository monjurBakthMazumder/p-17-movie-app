import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-transform">
  <div className='mr-auto'>
    <Link className="btn normal-case text-xl">daisyUI</Link>
  </div>
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/" >HOME</Link></li>
    <li><Link to="/popular" >POPULAR</Link></li>
    <li><Link to="/upcoming" >Up Coming</Link></li>
    <li><Link to="/top_rated" >Top Rated</Link></li>
    </ul>
  </div>
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/" >HOME</Link></li>
      <li><Link to="/popular" >POPULAR</Link></li>
      <li><Link to="/upcoming" >Up Coming</Link></li>
      <li><Link to="/top_rated" >Top Rated</Link></li>
      </ul>
    </div>
</div>
        </div>
    );
};

export default Header;