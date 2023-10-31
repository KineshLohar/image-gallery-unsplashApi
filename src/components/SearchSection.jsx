import React, { useState } from 'react';

import bg1 from '../assets/bg1.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';


const SearchSection = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if(searchTerm !== ''){
      navigate(`/photos/${searchTerm}`);
      setSearchTerm('');
    }
  }

  return (
    <div style={{backgroundImage : `url(${bg1})`}} className=' h-[50vh] overflow-hidden text-white bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center text-center'>
        <h2 className='my-4 mx-4 text-3xl font-bold'>Download High Quality Images by creators</h2>
        <p className='mb-4 mx-4 w-[60vw]'>Over 2.4 million+ stock Images by our talented community</p>
        <div className='bg-white px-4 py-2 w-[70vw] flex items-center justify-start rounded-lg lg:h-[3rem]'>
            <FontAwesomeIcon icon={faSearch} size='xl'  className='mr-4 text-gray-500' onClick={handleSearch}/>
            <input type="text" className='focus:outline-none w-[60vw] dark:text-black' placeholder='Search high resolution images' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            
        </div>

    </div>
  )
}

export default SearchSection