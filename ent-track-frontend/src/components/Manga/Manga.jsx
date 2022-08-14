import mangaPng from '../../assets/manga.png'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Mangalog() {
    let navigate = useNavigate();
    const newManga = () => {
        navigate("/Manga/New");
    }
    return(
        <div>
            <div>
            <img src={mangaPng} alt= 'Manga'/>
            </div>
            <div>
            <Button onClick={newManga}>Add New Manga</Button>
            </div>
        </div>

    )


}