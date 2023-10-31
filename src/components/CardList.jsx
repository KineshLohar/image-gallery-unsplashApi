import React, { useContext, useEffect, useState } from 'react'
import PhotoCard from './PhotoCard';
import { ImageContext } from '../App';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';

const CardList = ({setQuery, handleActiveModal}) => {

  const [image, setImage] = useState(null);

  const {searchQuery} = useParams();
  useEffect(()=>{
    setQuery(searchQuery);
  },[searchQuery])
  
  const {response, isLoading, error} = useContext(ImageContext);

  if(image){
    handleActiveModal(true)
  } else {
    handleActiveModal(false);
  }

  return (
    <>
    {
      isLoading 
      ?
      <div className=' text-xl font-medium h-[80vh] text-center '>Loading Images...</div>
      :
      <div className='p-4 flex flex-col items-center justify-center'>
        <h3 className=' text-3xl font-medium mb-4'>Results</h3>
        <div className='flex flex-wrap items-start justify-center'>
          {
            !response 
            ? error ? <div>Something Went Wrong : {error}</div> : <div>No Images Found</div>
            :
            response.map((item, index) => {
              return (
                <div onClick={() => setImage(item)}>
                  <PhotoCard key={index} data={item}/>
                </div>
              )
            })
          }
          
        </div>
          <div className=' fixed flex top-[10vh]  z-10' style={{display : image ? 'block' : 'none'}}>
            <FontAwesomeIcon icon={faX} size="xl" className=' absolute right-4 top-4 dark:text-white' onClick={() => setImage(null)} />
            <Modal data={image}/>
          </div>
        
      </div>
    }
    </>
  )
}

export default CardList;