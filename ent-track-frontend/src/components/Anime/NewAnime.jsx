import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function NewAnimeForm() {

	const navigate = useNavigate()

	const [anime, setAnime] = useState({
		name: '',
		season: '',
		website: '',
		episode: '',
		nameOfEp: '', //optional
	})

    async function handleSubmit(e) {
		e.preventDefault()
		
		await fetch(`${process.env.REACT_APP_SERVER_URL}Anime`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(anime)
		})
		
        navigate('/Anime')
	}
    
    return (
		<main>
			<h1>Add a New Anime</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name *Required*</label>
					<input
						required
						value={anime.name}
						onChange={e => setAnime({ ...anime, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="season">Season *Preferred*</label>
					<input
						value={anime.season}
						onChange={e => setAnime({ ...anime, season: e.target.value })}
						className="form-control"
						id="season"
						name="season"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="website">Website *Preferred*</label>
					<input
						value={anime.website}
						onChange={e => setAnime({ ...anime, website: e.target.value })}
						className="form-control"
						id="website"
						name="website"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="episode">Episode *Preferred*</label>
					<input
						value={anime.episode}
						onChange={e => setAnime({ ...anime, episode: e.target.value })}
						className="form-control"
						id="episode"
						name="episode"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="nameOfEp">Name of Episode *Optional*</label>
					<input
						value={anime.nameOfEp}
						onChange={e => setAnime({ ...anime, nameOfEp: e.target.value })}
						className="form-control"
						id="nameOfEp"
						name="nameOfEp"
					/>
				</div>
				<input className="btn btn-primary" type="submit" value="Add Anime" />
			</form>
		</main>
	)
}