import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import './App.css';
import MovieList from "./pages/MovieList";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ <Layout /> }>
                  <Route index element={ <Main /> } />
                  <Route path="movie" element={ <MovieList /> } />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;