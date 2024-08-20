import React from 'react'

const Card = ({movie}) => {

  return (
    <div className="card m-2 p-4" style={{width:"22%"}}>
  <img className="card-img-top" src={movie?.Poster} alt="Card image cap"/>
  <div className="card-body text-center d-">
    <h5 className="card-title col ">{movie?.Title}</h5>
    <p className="card-text">{movie?.Year}</p>
    <p className="card-text">{movie?.imdbID}</p>
    <p className="card-text">{movie?.Type}</p>
  <button className=''></button>
  </div>
</div>
  )
}

export default Card