import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router"

function AnimeDetails() {

	const { animeId } = useParams()

	const history = useHistory()

	const [anime, setAnime] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/Anime/${animeId}`)
			const resData = await response.json()
			setAnime(resData)
		}
		fetchData()
	}, [animeId])

	if (anime === null) {
		return <h1>Loading</h1>
	}

	function editAnime() {
		history.push(`/Anime/${anime.animeId}/edit`)
	}

	async function deleteAnime() {
		await fetch(`http://localhost:5000/Anime/${anime.animeId}`, {
			method: 'DELETE'
		})
		history.push('/Anime')
	}



	return (
		<main>
			<div className="row">
				<div className="col-sm-6">
					<h3>
						{anime.name}, {anime.season}, {anime.nameOfEp}, {anime.episode}, {anime.website}
					</h3>
				</div>
				<div className="col-sm-6">
					<br />
					<br />
					<a className="btn btn-warning" onClick={editAnime}>
						Edit
					</a>{` `}
					<button type="submit" className="btn btn-danger" onClick={deleteAnime}>
						Delete
					</button>
				</div>
			</div>
			<hr />
		</main>
	)
}

export default AnimeDetails