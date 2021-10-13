import React from "react";
import PropTypes from 'prop-types';
import './RealMovie.css';

function RealMovie({title, year, summary, poster, genres}){
    return (
        <div class="movie">
            <img src={poster} alte={title} title={title} />
            <div class="movie-data">
                <h3 class="movie-title">{title}</h3>
                <h5 class="movie-year">{year}</h5>
                <p class="movie-summary">{summary}</p>
            </div>
        </div>
    );
}

RealMovie.propTypes = {
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,  
};

export default RealMovie;