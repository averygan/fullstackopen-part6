import { useSelector, useDispatch } from 'react-redux'
import { createVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

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

  const vote = (id) => {
    dispatch(createVote(id))
		dispatch(setNotification('vote added'))
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
					<button onClick={() => vote(anecdote.id)}>vote</button>
				</div>
			</div>
		)}
		</>
	)
}

export default AnecdoteList
