import axios from 'axios'

export const getAnecdotes = async () => {
	await axios.get('http://localhost:3001/anecdotes').then(res => res.data)
}