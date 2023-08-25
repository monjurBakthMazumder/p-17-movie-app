import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const [currentMovieDetails, setCurrentMovieDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(response => response.json())
            .then(data => setCurrentMovieDetails(data))
            .catch(err => console.error(err));
    };
    return (
        <div className="text-white">
            {currentMovieDetails && (
                <div>
                    <img src={`https://image.tmdb.org/t/p/original${currentMovieDetails.backdrop_path}`} className="img-fluid w-full rounded-top" alt=""/>
                    <div className="flex flex-col-reverse md:flex-row justify-center icon gap-5 my-5 md:my-10 px-[10%]">
                        <img src={`https://image.tmdb.org/t/p/original${currentMovieDetails.poster_path}`} className="img-fluid rounded-top h-fit md:w-1/2 lg:w-1/3 xl:w-1/5" alt=""/>
                        <div>
                            <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold'>{currentMovieDetails.original_title}</h1>
                            <h1 className='text-xl md:text-2xl xl:text-3xl my-2 md:my-3'>{currentMovieDetails.tagline}</h1>
                                <p><span className="font-semibold">Popularity:</span> {currentMovieDetails.popularity}</p>
                            <p className=" my-3 md:my-5"><span className="font-semibold text-xl md:text-2xl">Overview <br/></span>{currentMovieDetails.overview}</p><hr/>
                            <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-5 my-2 md:my-3">
                                <p><span className="font-semibold">Release Date:</span> {currentMovieDetails.release_date}</p>
                                <p><span className="font-semibold">Runtime:</span> {currentMovieDetails.runtime} min</p>
                            </div><hr/>
                            <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-5 my-2 md:my-3">
                                <p><span className="font-semibold">Total vote:</span> {currentMovieDetails.vote_count}</p>
                                <span className=' text-base flex justify-start items-center'><span className="font-semibold">Rating:</span> {currentMovieDetails.vote_average} <i class="fa-solid fa-star ml-1"></i></span>
                            </div><hr/>
                            <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-5 my-2 md:my-3">
                                <p><span className="font-semibold">Budget:</span> ${currentMovieDetails.budget}</p>
                                <p><span className="font-semibold">Revenue:</span> ${currentMovieDetails.revenue}</p>
                            </div><hr/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetails;
