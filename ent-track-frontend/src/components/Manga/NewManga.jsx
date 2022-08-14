import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function NewMangaForm() {

	const navigate = useNavigate()

	const [book, setBook] = useState({
		name: '',
		chapter: '',
		website: '',
		page: '',
		nameOfCh: '', //optional
	})

    async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`${process.env.REACT_APP_SERVER_URL}Manga`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(manga)
		})
		
        navigate('/Book')
	}
    
    return (
		<main>
			<h1>Add a New Book</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name *Required*</label>
					<input
						required
						value={book.name}
						onChange={e => setBook({ ...book, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="chapter">Chapter *Preferred*</label>
					<input
						value={book.chapter}
						onChange={e => setBook({ ...book, chapter: e.target.value })}
						className="form-control"
						id="chapter"
						name="chapter"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="website">Website *Optional*</label>
					<input
						value={book.website}
						onChange={e => setBook({ ...book, website: e.target.value })}
						className="form-control"
						id="website"
						name="website"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="page">Page *Optional*</label>
					<input
						value={book.page}
						onChange={e => setBook({ ...book, page: e.target.value })}
						className="form-control"
						id="page"
						name="page"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="nameOfCh">Name of Chapter *Optional*</label>
					<input
						value={book.nameOfCh}
						onChange={e => setBook({ ...book, nameOfCh: e.target.value })}
						className="form-control"
						id="nameOfCh"
						name="nameOfCh"
					/>
				</div>
				<input className="btn btn-primary" type="submit" value="Add Book" />
			</form>
		</main>
	)
}