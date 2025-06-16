import React from 'react'

const MovieCard = ({movie:{title,vote_average,poster_path,release_date,original_language}}) => {
  return (
    <div className='movie-card'>
    <img src={poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}`:'/no-movie.png'} alt={title}/>
    <div className='mt-4'>
        <h3>{title}</h3>
        <div className='content'>
            <div className='rating'>
                <img src='/star.svg'/>
                <p>{vote_average.toFixed(1)}</p>
                <span>•</span>
        <p className='lang'>{original_language}</p>
        <span>•</span><span>•</span>
        
            </div>
        </div>
        
    </div>
</div>
  )
}

export default MovieCard