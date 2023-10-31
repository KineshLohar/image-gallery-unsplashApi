import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link , useNavigate} from 'react-router-dom';


const Navbar = ({darkModeStatus}) => {

    const [searchActiveMob, setSearchActiveMob] = useState(false);
    const [mobMenu, setMobMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSearch = () => {
        if(searchTerm !== ''){
        navigate(`/photos/${searchTerm}`);
        setSearchTerm('');
        }
    }

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark');
        } else{
            document.documentElement.classList.remove('dark');
        }
    },[darkMode])

  return (
    <div className='w-full px-2 flex justify-between items-center h-[8vh] sm:px-10 lg:px-6 '>
        <div className='w-full flex items-center justify-between lg:hidden '>
            <Link to='/'><div className=' font-bold italic sm:text-xl md:text-xl lg:w-[16vw]'>Image Gallery</div></Link>
            <div>
            <input type="text" className='py-2 px-2 mr-2 w-[45vw] bg-slate-200 rounded-lg focus:outline-none dark:text-black' style={{display : !searchActiveMob ? "none" : '' }} placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            
            {
                !searchActiveMob 
                ? 
                <FontAwesomeIcon icon={faSearch} size='xl'  className='mr-4 ml-2 text-gray-500 dark:text-white' onClick={() => setSearchActiveMob(!searchActiveMob) } />
                :
                <>
                <FontAwesomeIcon icon={faX} size="xl" className='mr-2' onClick={() => setSearchActiveMob(!searchActiveMob)} />
                <FontAwesomeIcon icon={faSearch} size='xl'  className='mr-2 text-gray-500 dark:text-white' onClick={() => handleSearch()} />
                </>
            }
            
            
            <FontAwesomeIcon icon={faBars} size='xl'  className=' text-gray-500 dark:text-white' onClick={()=> setMobMenu(true)}/>
            {
                mobMenu 
                && 
                <div className=' absolute bg-white h-[100vh] top-0 right-0 w-[50vw] shadow-2xl shadow-black rounded-md flex flex-col pr-6 pt-6 items-end justify-start dark:text-white dark:bg-black transition-colors duration-200'>
                    <FontAwesomeIcon icon={faX} size="xl" className='my-4' onClick={() => {setMobMenu(false)}} />
                    <Link className='  py-2 text-lg font-medium'>Explore</Link>
                    <Link className=' my-2 py-2 text-lg font-medium'>Collections</Link>
                    <Link className='  py-2 text-lg font-medium'>Community</Link>

                    <div>
                        <h3 className=' text-lg font-semibold my-4'>{darkMode ? "Light" : "Dark"} Mode</h3>
                        <div onClick={() => {
                            setDarkMode(!darkMode);
                        }} 
                        className='my-2 h-10 p-1 bg-gray-500 rounded-full relative' style={{backgroundColor: darkMode && "white"}}>
                            <div className='h-8 rounded-full w-8 bg-white absolute' style={{right : darkMode && "0.25rem", left:!darkMode && "0.25rem", backgroundColor : darkMode && "black"}}></div>
                        </div>
                    </div>
                </div>
            }
            
            </div>
        </div>
        <div className=' hidden lg:flex lg:w-full items-center justify-between'>
            <Link to='/'><div className=' font-bold italic sm:text-xl lg:w-[16vw]'>Image Gallery</div></Link>
            <div className='flex items-center justify-evenly lg:w-[75vw]'>
                <div className='lg:w-[25vw] bg-slate-200 rounded-lg px-2 flex justify-between items-center'>
                    <FontAwesomeIcon icon={faSearch} size='lg' className=' dark:text-black cursor-pointer' onClick={() => handleSearch()}/>
                    <input type="text" className='py-2 px-2 w-[20vw] bg-transparent focus:outline-none dark:text-black' placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    <FontAwesomeIcon icon={faX} className=' cursor-pointer dark:text-black' onClick={() => setSearchTerm("")}/>
                </div>
                
                <Link className=' py-2 text-lg font-medium'>Explore</Link>
                <Link className=' py-2 text-lg font-medium'>Collections</Link>
                <Link className=' py-2 text-lg font-medium'>Community</Link>

                <div className='flex items-center justify-between w-[]'>
                    <h3 className=' text-lg font-semibold mx-2'>{darkMode ? "Light" : "Dark"} Mode</h3>
                    <div onClick={() => setDarkMode(!darkMode)} className='my-2 h-10 w-24 p-1 bg-gray-500 rounded-full relative' >
                        <div className='h-8 rounded-full w-8 bg-white absolute' style={{right : darkMode && "0.25rem", left:!darkMode && "0.25rem", backgroundColor : darkMode && "black"}}></div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar