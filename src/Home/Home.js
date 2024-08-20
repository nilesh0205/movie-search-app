import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import { SearchMovie } from '../apis/Omdb';
import axios from 'axios';

export const Home = ({movie}) => { 

  
  
  const [movieList,setMovieList]=useState();
  console.log(movieList,"movieList")
    const DownloadDefaultMovie=async(movieName)=>{
        const response= await axios.get(SearchMovie(movieName));
        console.log(response?.data?.Search,"response");
        setMovieList(response?.data?.Search || []);
}
  
  useEffect(()=>{
        DownloadDefaultMovie(movie);
    },[movie])
  return (
    <div className="d-flex flex-wrap">  { 
      
      movieList?.map((movie)=>(
        <Card key={movie?.imdbID} movie={movie}/>
      ))}  </div>
  )
}
