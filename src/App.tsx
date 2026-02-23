import MovieGallery from './components/movieGallery'
import './App.css'
import {movies} from './data/movies.ts';

function App() {
  return (
      <div className="App">
        <MovieGallery movies={movies} />
      </div>
  )
}

export default App
