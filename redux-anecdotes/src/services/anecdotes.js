import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (anecdote) => {
	const object = (anecdote)
	const response = await axios.post(baseUrl, object)
	return response.data
}

const addVotes = async (id, newObject) => {
	const response = await axios.put(`${baseUrl}/${id}`, newObject)
	return response.data
}

export default { getAll, createNew, addVotes }