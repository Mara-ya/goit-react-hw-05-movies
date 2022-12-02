import { Box } from "components/Box";
import SearchBar from "components/SearchBar/SearchBar";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { fetchMovieByName } from "services/Movie-Database-api";
import { Item, Text } from "./Movies.styled";

export default function Movies() {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useSearchParams();
    const [searchMovies, setSearchMovies] = useState([]);

    function handleSubmit (searchQuery) {
        setSearchQuery({ query: searchQuery });
    }

    useEffect(() => {
        const query = searchQuery.get('query');
        if (!query) return;

        async function getSearchMovie() {
            try {
                const resultingData = await fetchMovieByName(query);
                setSearchMovies(resultingData);
            } catch (error) {
                console.log(error);
            }
        }

        getSearchMovie();
    }, [searchQuery]);

    return(
        <Box as="div" p={3}>
            <SearchBar onSubmit={handleSubmit}/>
            {searchMovies.length !== 0 
            ? <ul> 
                {searchMovies.map(({id, title}) => {
                    return(
                        <Item key={id}>
                            <NavLink to={`${id}`} state={{ from: location }}>
                                {title}
                            </NavLink>
                        </Item>
                    )
                })}
            </ul>
            : <Text>Enter the name</Text>}
        </Box>
    )
}