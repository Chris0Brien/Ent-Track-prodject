import Button from '@mui/material/Button';
import moviesPng from '../assets/movies.png'
import mangaPng from '../assets/manga.png'
import booksPng from '../assets/books.png'
import animePng from '../assets/anime.png'
import { useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();
    const anime = () => {
        navigate("/Anime");
    }
    const manga = () => {
        navigate("/Manga");
    }
    const books = () => {
        navigate("/Books");
    }
    const movies = () => {
        navigate("/Movies");
    }
    return(
        <div className='home'>
            <div>
            Choose the entertainment you would like to log
            </div>
            <div>
            never loose track of you left off ever again
            </div>



            <div>
            <img src={moviesPng} alt= 'Movies'/>
            </div>
            <div>
            <Button onClick={movies}>Movies</Button>
            </div>
            <div>
            <img src={booksPng} alt= 'Books'/>
            </div>
            <div>
            <Button onClick={books}>Books</Button>
            </div>
            <div>
            <img src={mangaPng} alt= 'Manga'/>
            </div>
            <div>
            <Button onClick={manga}>Manga</Button>
            </div>
            <div>
            <img src={animePng} alt= 'Anime'/>
            </div>
            <div>
            <Button onClick={anime}>Anime</Button>
            </div>
        </div>

    )


}