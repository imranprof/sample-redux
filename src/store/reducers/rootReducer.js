
const initialState = {
  count: 10,
  type: ''
}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'PLUS': {
      return {
        count: state.count + 1,
        type: 'Plus'
      }
    }
    case 'MINUS': {
      return {
        count: state.count - 1,
        type: 'Minus'
      }
    }

    default: return state
  }

}

export default rootReducer;