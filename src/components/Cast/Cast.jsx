import { Box } from "components/Box";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "services/Movie-Database-api";
import { Item, List } from "./Cast.styled";

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function getCast(id) {
            try {
                const resultingData = await fetchCast(id);
                const necessaryData = resultingData.map(({name, profile_path, character}) => ({name, profile_path, character}))
                setCast(necessaryData);
            } catch (error) {
                console.log(error);
            }
        }

        getCast(movieId);
    }, [movieId])

    return(
        <Box as='div' p={2}>
            {{cast} && <List>
                {cast.map(({name, profile_path, character}) => 
                    {if(profile_path){
                        return(
                            <Item key={name}>
                                <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={`Photo: ${name}`}/>
                                <p>{name}</p>
                                <p>Character: {character}</p>
                            </Item>
                        )
                    } else {
                        return(
                            <Item key={name}>
                                <p>{name}</p>
                                <p>Character: {character}</p>
                            </Item>
                        )
                    }
                    }
                )}
            </List>}
        </Box>
    )
}