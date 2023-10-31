import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const PhotoCard = ({data}) => {
    console.log(data)
  return (
        <div className='m-2 pb-1 bg-black text-white dark:bg-white dark:text-black rounded-xl'>
            <img src={data.urls.small} alt={data.alt_description} className=' object-cover rounded-xl'/>
            <div className='flex items-center justify-between my-2 px-2'>
                <div className='flex mx-2'>
                    <img src={data.user.profile_image.small} alt="profile img" className=' object-cover rounded-full mr-2 h-12'/>
                    <div className='flex flex-col'>
                        <h6 className=' font-semibold'>{data.user.name}</h6>
                        <p>@{data.user.username}</p>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faThumbsUp} /> {data.likes}
                </div>
            </div>
        </div>
  )
}

export default PhotoCard;