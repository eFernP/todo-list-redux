
const inputAdd = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_INPUT':
      return action.text
    case 'UPDATE_INPUT':
      return action.text
    default:
      return state
  }
}

export default inputAdd;