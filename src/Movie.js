import React from 'react';
import axios from 'axios';
import RealMovie from './RealMovie';
import './Movie.css';

class Movie extends React.Component{
    state={
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("http://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading:false});
    }
    componentDidMount(){
      this.getMovies();
    }
    render(){
        const { isLoading, movies } = this.state;
        return (
            <section class="container">
            {isLoading ? (
                <div class="loader">
                    <span class="loader-text">'Loading...'</span>
                </div>
                ) : (
                <div class="movies">
                {movies.map(movie => (
                <RealMovie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                />
            )
        )}
                </div>
            )}
        </section>
        );
    }
}

export default Movie;