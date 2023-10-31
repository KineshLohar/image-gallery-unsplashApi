
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import CardList from './components/CardList';
import useAxios from './hooks/useAxios';
import { createContext, useEffect, useState } from 'react';

export const ImageContext = createContext();

function App() {
  
  const [query, setQuery] = useState("nature");
  const [activeModal, setActiveModal] = useState(false)

  const { response , isLoading, error, fetchData } = useAxios(`/search/photos?page=1&per_page=20&query=${query}&client_id=B7uRK0IoKjWrDzxJovwwgSdHHaVebb3zn0quQG50he8`)
  
  const value ={
    response , isLoading, error, fetchData
  }

  const handleQuery = (query) => {
    setQuery(query);
  }

  const handleActiveModal = (status) => {
    setActiveModal(status)
  }

 
  return (
    <ImageContext.Provider value={value}>
      <BrowserRouter basename='/'>
      <div className='m-0 dark:bg-black dark:text-white transition-colors duration-700' style={{backgroundColor : activeModal && 'rgb(0,0,0,0.1)'}}>
        <Navbar />
        <Routes >
          <Route path='/' element={<><SearchSection /> <CardList setQuery={handleQuery} handleActiveModal={handleActiveModal}/></>}/>
          <Route path='/photos/:searchQuery' element={<CardList setQuery={handleQuery} handleActiveModal={handleActiveModal}/>}/>   
        </Routes>
      </div>
      </BrowserRouter>
    </ImageContext.Provider>
  );
}

export default App;
