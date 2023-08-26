import React from 'react';
import HomePopularSlider from './Movie/HomePopularSlider';
import { Link } from 'react-router-dom';
import HomeTopRatedSlider from './Movie/HomeTopRatedSlider';
import HomeUpComingSlider from './Movie/HomeUpComingSlider';
import HomeTrendingSlider from './Movie/HomeTrendingSlider';
import HomeNowPlayingSlider from './Movie/HomeNowPlayingSlider';
const Home = () => {
    return (
        <div className=' px-5 md:px-[10%] text-white'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-center my-2 lg:my-5 font-bold underline'>Movie</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div>
                    <Link to="/popular" >
                        <h1 className='text-3xl my-2 lg:my-5 font-semibold hover:text-red-600'>Popular</h1>
                    </Link>
                    <HomePopularSlider/>
                </div>
                <div>
                    <Link to="/top_rated" >
                        <h1 className='text-3xl my-2 lg:my-5 font-semibold hover:text-red-600'>Top rated</h1>
                    </Link>
                    <HomeTopRatedSlider/>
                </div>
                <div>
                    <Link to="/trending" >
                        <h1 className='text-3xl my-2 lg:my-5 font-semibold hover:text-red-600'>Trending</h1>
                    </Link>
                    <HomeTrendingSlider/>
                </div>
                <div>
                    <Link to="/now-playing" >
                        <h1 className='text-3xl my-2 lg:my-5 font-semibold hover:text-red-600'>Now playing</h1>
                    </Link>
                    <HomeNowPlayingSlider/>
                </div>
                <div>
                    <Link to="/upcoming" >
                        <h1 className='text-3xl my-2 lg:my-5 font-semibold hover:text-red-600'>Up coming</h1>
                    </Link>
                    <HomeUpComingSlider/>
                </div>
            </div>
        </div>
    );
};

export default Home;