import moviesPng from '../../assets/movies.png'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Movielog() {
    let navigate = useNavigate();
    const newMovie = () => {
        navigate("/Movies/New");
    }
    return(
        <div>
            <div>
            <img src={moviesPng} alt= 'Movies'/>
            </div>
            <div>
            <Button onClick={newMovie}>Add New Movie</Button>
            </div>
        </div>

    )


}