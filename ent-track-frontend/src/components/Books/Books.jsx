import booksPng from '../../assets/books.png'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function BookLog() {
    let navigate = useNavigate();
    const newBook = () => {
        navigate("/Books/New");
    }

    return(
        <div>
            <div>
            <img src={booksPng} alt= 'Books'/>
            </div>
            <div>
            <Button onClick={newBook}>Add New Book</Button>
            </div>
        </div>

    )


}