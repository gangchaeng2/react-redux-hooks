const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

// export const increment = num => ({ type: INCREMENT, num })
// export const decrement = () => ({ type: DECREMENT })

const initialState = 0

export default function counter(state = initialState, action) {
  const { type } = action

  switch(type) {
    case INCREMENT:
      return state + 1

    case DECREMENT:
      return state - 1

    default:
      return state
  }
}
