import {AdditionalInformation} from "components/AdditionalInformation/AdditionalInformation";
import MovieDetails from "components/MovieDetails/MovieDetails";
import { Outlet } from "react-router-dom";

export default function Movie() {
    return(
        <>
                <MovieDetails />
                <AdditionalInformation />
                <Outlet />
        </>
    )
}