import React from 'react';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const HomeTrendingSlider = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    useEffect (() =>{
      fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        .then(response => response.json())
        .then(data => setTrendingMovies(data.results))
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
                    trendingMovies.map(movie =>(
                        // <Link to={`/movie/${movie.id}`}/>
                        <div>
                            <div>
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} class="img-fluid rounded-top" alt=""/>
                        </div>
                        <div className='text-start absolute bottom-0 p-2'>
                            <h1 className='text-lg md:text-xl font-bold'>{movie.original_title}</h1>
                            <p className='flex justify-start item-center gap-5 text-base md:text-lg font-semibold md:my-1'>
                            <span>{movie.release_date}</span>
                            <span>{movie.vote_average}<i class="fa-solid fa-star ml-1"></i></span>
                            </p>
                        </div>
                        </div>
                    ))
                 }
            </Carousel>
        </div>
    );
};

export default HomeTrendingSlider;