import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TradingSlider from './Sliver/TradingSlider';

const Trending = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    useEffect (() =>{
      fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        .then(response => response.json())
        .then(data => setTrendingMovies(data.results))
        .catch(err => console.error(err));
    },[])
    return (
        <div>
            <TradingSlider/>
            <div className='mb-5 md:mb-10 p-5 md:px-[10%] text-white'>
            <h1 className='text-3xl my-5 lg:my-10 font-semibold'>Trending</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
            {
                trendingMovies.map(movie =>(
                    <div>
                        <Link to={`/movie/${movie.id}`}>
                        <div className='relative my-2 hover:scale-125 duration-500 hover:z-50'>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} class="img-fluid rounded-top" alt="" className='rounded' />
                            <span className='absolute text-base font-bold bottom-0 m-2 bg-black bg-opacity-75 border-[3px] border-red-600 rounded-full w-10 h-10 flex justify-center items-center'>
                                {movie.vote_average}
                            </span>
                        </div>
                        </Link>
                        <Link to={`/movie/${movie.id}`}>
                                <h1 className='text-base font-bold hover:text-red-600'>{movie.original_title.slice(0,22)}</h1>
                        </Link>
                        <p className='text-sm text-gray-400'>{movie.release_date}</p>
                    </div>
                ))
            }
            </div>
            </div>
        </div>
    );
};

export default Trending;