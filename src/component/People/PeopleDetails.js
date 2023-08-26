import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PeopleDetails = () => {
    const [people, setPeople] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/person/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(err => console.error(err));
    };
    console.log(people);
    return (
        <div className="text-white">
            {people && (
                <div>
                    <div className="flex flex-col md:flex-row justify-start icon gap-5 my-5 md:my-10 px-[10%]">
                        <img src={`https://image.tmdb.org/t/p/original${people.profile_path}`} className="img-fluid rounded-top h-fit md:w-1/2 lg:w-1/3 xl:w-1/5" alt=""/>
                        <div>
                            <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold'>{people.name}</h1>
                            {/* <h1 className='text-xl md:text-2xl xl:text-3xl my-2 md:my-3'>{people.known_for_department}</h1> */}
                                <p><span className="font-semibold">Popularity:</span> {people.popularity}</p>
                            <p className=" my-5 md:my-10"><span className="font-semibold text-xl md:text-2xl">Biography <br/></span>{people.biography}</p><hr/>
                            <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-5 my-2 md:my-3">
                                <p><span className="font-semibold">Birth date:</span> {people.birthday}</p>
                                <p><span className="font-semibold">Place Of Birth:</span> {people.place_of_birth}</p>
                            </div><hr/>
                            <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-5 my-2 md:my-3">
                                <p><span className="font-semibold">Known For:</span> {people.known_for_department}</p>
                                <p><span className="font-semibold">Gender:</span> {people.gender !== 1 ? "Male" : "Female"} </p>
                            </div><hr/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PeopleDetails;