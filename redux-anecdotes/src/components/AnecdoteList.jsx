import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { updateNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
	const anecdotes = useSelector(state => {
		if (state.filter === '') {
			return state.anecdotes
		}
		return state.anecdotes.filter(
			anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
		)
	})
  const dispatch = useDispatch()

  const vote = (id, anecdote) => {
		const updatedAnecdote = {...anecdote, votes: anecdote.votes + 1}
    dispatch(addVote(id, updatedAnecdote))
		dispatch(updateNotification('vote added', 5))
  }

	return (
		<>
		<h2>Anecdotes</h2>
		{anecdotes.map(anecdote =>
			<div key={anecdote.id}>
				<div>
					{anecdote.content}
				</div>
				<div>
					has {anecdote.votes}
					<button onClick={() => vote(anecdote.id, anecdote)}>vote</button>
				</div>
			</div>
		)}
		</>
	)
}

export default AnecdoteList
