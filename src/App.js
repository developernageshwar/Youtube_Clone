import React from 'react'


import {Header} from './componnt/Header.js';
import {Feed} from './componnt/Feed.js';
import SearchResult from './componnt/SearchResult.js'
import VideoDetails from './componnt/VideoDetails.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import {ContextApi}from './context/Contextapi'

  export const App = () => {
  return (
    <ContextApi>
      <BrowserRouter>
    <div className='flex flex-col h-full'>
      <Header/>
      <Routes>
        <Route path='/'exact element={<Feed/>}/>
        <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
        <Route path='/video/:id' element={<VideoDetails/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </ContextApi>
  )
}


