import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className='loading'></div>;
  }

  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    );
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year, Director: director, Actors: actors } = movie;
  const [heroine, hero] = actors.split(',').map(actor => actor.trim());

  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <p><strong>Director:</strong> {director}</p>
        
        <p><strong>Hero:</strong> {heroine}</p>  
        <p><strong>Heroine:</strong> {hero}</p>
        <h4>{year}</h4>
        {/* <iframe
          title={title}
          width='560'
          height='315'
          src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(title)}+${encodeURIComponent(year)}+trailer`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        /> */}
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
