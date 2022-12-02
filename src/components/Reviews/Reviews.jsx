import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchReviews } from "services/Movie-Database-api";
import { Box } from "components/Box";

export default function Reviews() {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        async function getReviews(id) {
            try {
                const resultingData = await fetchReviews(id);
                setReviews(resultingData);
            } catch (error) {
                console.log(error)
            }
        }

        getReviews(movieId);
    }, [movieId])

    return(
        <Box as="div" p={3}>
            {reviews.length === 0 
                ? <p>We don't have any reviews for this movie.</p>
                : <ul> 
                    {reviews.map(({author, content}) => {
                        return(
                            <li key={author}>
                                <p>{author}</p>
                                <p>{content}</p>
                            </li>
                        )
                    })}
                </ul>
            }
        </Box>
    )
}