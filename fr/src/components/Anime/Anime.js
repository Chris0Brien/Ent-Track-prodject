import axios from "axios";
import React, { useState, useEffect } from "react"
import animePng from '../../assets/anime.png'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Animelog() {
    let navigate = useNavigate();
    const newAnime = () => {
        navigate("/Anime/New");
    }

    const [ home, setHome ] = useState("")

	useEffect(() => {
		axios.get("http://localhost:5000/home").then(function(response) {
			setHome(response.data)
		})
	}, [])
    return(
        <div>
            <div>
            <img src={animePng} alt= 'Anime'/>
            </div>
            <div>
            <Button onClick={newAnime}>Add New Anime</Button>
            </div>
            {home}
        </div>

    )


}