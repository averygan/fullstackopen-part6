import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
	return {
		content: anecdote,
		id: getId(),
		votes: 0
	}
}

const AnecdoteForm = () => {
	const dispatch = useDispatch()

	const addAnecdote = async (event) => {
		event.preventDefault()
		const anecdote = event.target.anecdote.value
		event.target.anecdote.value = ''
		const newAnecdote = await anecdoteService.createNew(asObject(anecdote))
		dispatch(createAnecdote(newAnecdote))
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