import { Box } from "components/Box";
import { useState } from "react"
import { useEffect } from "react"
import { fetchTrending } from "services/Movie-Database-api"
import { Item, ItemLink } from "./Trending.styled";

export default function Trending () {
    const [listTrendingMovies, setListTrendingMovies] = useState([]);

    useEffect(() => {
        async function getTrending() {
            try{
                const resultingMovies = await fetchTrending();
                const necessaryData = resultingMovies.map(({id, title}) => ({id, title}));
                const filterNecessaryData = necessaryData.filter(data => data.title !== undefined);
                setListTrendingMovies(prevState => [...prevState, ...filterNecessaryData]);
            } catch (error){
                console.log(error)
            }
        }

        getTrending();
    },[])

    return(
        <Box as="div" p={3}>
            {listTrendingMovies && (
                <ul>
                {listTrendingMovies.map(({id, title}) => {
                    return <Item key={id} ><ItemLink to={`movies/${id}`}>{title}</ItemLink></Item>
                })}
                </ul>
            )}
        </Box>
    )
}