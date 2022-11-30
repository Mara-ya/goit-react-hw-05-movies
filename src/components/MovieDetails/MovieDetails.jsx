import { Box } from "components/Box";
import { useState, useEffect } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { fetchMovie } from "services/Movie-Database-api"
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { Img, WrapperGoBack, WrapperMovie } from "./MovieDetails.styled";

export default function MovieDetails () {
    const location = useLocation();
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const backLink = location.state?.from ?? "/movies";
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getMovieData(id) {
            try {
                const resultingData = await fetchMovie(id)
                .then(({poster_path, title, genres, overview, vote_average}) => ({poster_path, title, genres, overview, vote_average}));
                setMovieInfo(resultingData);
            } catch (error) {
                setError(error);
            }
        }

        getMovieData(movieId);
    },[movieId]);
    
    return(
        <Box as="div" p={3}>
            <WrapperGoBack>
                <Link to={backLink}><AiOutlineArrowLeft /> Go back</Link>
            </WrapperGoBack>
            <WrapperMovie>
                <Img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt={movieInfo.title} />
                <div>
                    <h2>{movieInfo.title}</h2>
                    <p>User Score: {Math.round(movieInfo.vote_average*10)}%</p>
                    <h3>Overview</h3>
                    <p>{movieInfo.overview}</p>
                    <h3>Genres</h3>
                    {movieInfo.hasOwnProperty("genres") && 
                    <ul>{
                        movieInfo.genres.map(({id, name}) => {
                            return <li key={id} ><p>{name}</p></li>
                        })}</ul>}
                    </div>
            </WrapperMovie>
            {error && <Navigate to="/" replace />}
        </Box>
    )
}