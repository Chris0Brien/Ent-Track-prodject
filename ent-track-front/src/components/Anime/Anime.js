import animePng from '../../assets/anime.png'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Animelog() {
    let navigate = useNavigate();
    const newAnime = () => {
        navigate("/Anime/New");
    }
    return(
        <div>
            <div>
            <img src={animePng} alt= 'Anime'/>
            </div>
            <div>
            <Button onClick={newAnime}>Add New Anime</Button>
            </div>
        </div>

    )


}