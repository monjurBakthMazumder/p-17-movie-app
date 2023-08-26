import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const People = () => {
    const [peoples, setPeoples] = useState([]);
    useEffect (() =>{
      fetch('https://api.themoviedb.org/3/person/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        .then(response => response.json())
        .then(data => setPeoples(data.results))
        .catch(err => console.error(err));
    },[])
    console.log(peoples);
    return (
        <div className='text-center md:mb-10 p-5 md:px-[10%] text-white'>
            {
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
                    {peoples.map(people =>(
                        <div>
                            <Link to={`/people/${people.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original${people.profile_path}`} class="img-fluid rounded-top" alt="" className='rounded' />
                                <h1  className='text-base font-bold hover:text-red-600'>{people.name.slice(0,20)}</h1>
                            </Link>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default People;