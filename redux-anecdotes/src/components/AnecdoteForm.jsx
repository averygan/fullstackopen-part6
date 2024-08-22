import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { updateNotification } from '../reducers/notificationReducer'

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
		dispatch(createAnecdote(asObject(anecdote)))
		dispatch(updateNotification(`new anecdote added: ${anecdote}`, 5))
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