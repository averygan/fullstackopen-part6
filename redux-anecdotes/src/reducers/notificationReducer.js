import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		setNotification(state, action) {
			return action.payload
		},
		resetNotification(state) {
			return ''
		},
	}
})

export const { setNotification, resetNotification } = notificationSlice.actions

export const updateNotification = (message, time) => {
	return dispatch => {
		dispatch(setNotification(message))
		setTimeout(() => {
			dispatch(resetNotification())
		}, time * 1000)
	}
}

export default notificationSlice.reducer