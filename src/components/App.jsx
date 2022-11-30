import { Route, Routes } from 'react-router-dom';
import { Layout } from "./Layout/Layout";
// import Movies from './Movies/Movies';
import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';

const Home = lazy(() => import('../pages/Home/Home'));
const SearchMovie = lazy(() => import ('../pages/SearchMovie/SearchMovie'));
const Movie = lazy(() => import ('../pages/Movie/Movie'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='movies' element={<SearchMovie />} />
            <Route path='movies/:movieId' element={<Movie />}>
              <Route path='Cast' element={<Cast />}/>
              <Route path='Reviews' element={<Reviews />}/> 
            </Route>
          </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
