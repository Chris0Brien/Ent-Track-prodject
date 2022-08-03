import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function NewMovieForm() {

	const navigate = useNavigate()

	const [movies, setMovies] = useState({
		name: '',
        website: '',
        sequel: '',
        time: '',
	})

    async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`${process.env.REACT_APP_SERVER_URL}Movies`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(place)
		})

        navigate('/Movies')
	}
    
    return (
		<main>
			<h1>Add a New Movie</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name *Required*</label>
					<input
						required
						value={movies.name}
						onChange={e => setMovies({ ...movies, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="website">Website *Preferred*</label>
					<input
						value={movies.website}
						onChange={e => setMovies({ ...movies, website: e.target.value })}
						className="form-control"
						id="website"
						name="website"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="sequel">Sequel *If Multiple*</label>
					<input
						value={movies.sequel}
						onChange={e => setMovies({ ...movies, sequel: e.target.value })}
						className="form-control"
						id="sequel"
						name="sequel"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="time">How Far in Movie *Optional*</label>
					<input
						value={movies.time}
						onChange={e => setMovies({ ...movies, time: e.target.value })}
						className="form-control"
						id="time" 
                        name="time" 
                    />
				</div>
				<input type="submit" value="Add Movies" />
			</form>
		</main>
	)
}