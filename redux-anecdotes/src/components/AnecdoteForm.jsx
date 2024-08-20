import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
	const dispatch = useDispatch()

	const addAnecdote = (event) => {
		event.preventDefault()
		const anecdote = event.target.anecdote.value
		event.target.anecdote.value = ''
		dispatch(createAnecdote(anecdote))
		dispatch(setNotification(`new anecdote added: ${anecdote}`))
		setTimeout(() => {
			dispatch(resetNotification())
		}, 5000)
	}

	return (
		<>
		<h2>create new</h2>
		<form onSubmit={addAnecdote}>
			<div><input name="anecdote" /></div>
			<button>create</button>
		</form>
		</>
	)
}

export default AnecdoteForm