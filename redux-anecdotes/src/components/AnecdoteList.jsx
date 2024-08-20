import { useSelector, useDispatch } from 'react-redux'
import { createVote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

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
		anecdoteService.addVotes(anecdote.id, updatedAnecdote)
    dispatch(createVote(id))
		dispatch(setNotification('vote added'))
		setTimeout(() => {
			dispatch(resetNotification())
		}, 5000)
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
