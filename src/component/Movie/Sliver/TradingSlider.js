import React from 'react';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const TradingSlider = () => {
    const [tradingMovies, setTradingMovies] = useState([]);
    useEffect (() =>{
      fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        .then(response => response.json())
        .then(data => setTradingMovies(data.results))
        .catch(err => console.error(err));
    },[])
    return (
        <div className='text-white relative'>
             <Carousel
                showThumbs = {false}
                autoPlay = {true}
                transition = {1}
                infiniteLoop = {true}
                showStatus = {false}
                >
                 {
                    tradingMovies.map(movie =>(
                        // <Link to={`/movie/${movie.id}`}/>
                        <div>
                            <div>
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} class="img-fluid rounded-top" alt=""/>
                        </div>
                        <div className='text-start lg:w-3/4 xl:w-3/5 absolute bottom-5 xl:bottom-10 p-2 md:p-10'>
                            <h1 className='text-2xl md:text4xl xl:text-5xl font-bold'>{movie.original_title}</h1>
                            <p className='flex justify-start item-center gap-5 lg:gap-10 text-xl md:text-2xl font-semibold my-1 md:my-3 lg:my-5'>
                            <span>{movie.release_date}</span>
                            <span>{movie.vote_average}<i class="fa-solid fa-star ml-1"></i></span>
                            </p>
                            <p>{movie.overview.slice(0,100)}</p>
                        </div>
                        </div>
                    ))
                 }
            </Carousel>
        </div>
    );
};

export default TradingSlider;