import { DECREMENT, INCREMENT, THEME } from './actionTypes';

function rootReducer(state, type)  {
    if(type === INCREMENT)  {
      return {...state, count: state.count + 1}
    }

    if(type === DECREMENT)  {
      return {...state, count: state.count - 1}
    }

    if(type === THEME)  {
      return {...state, theme: !state.theme}
    }
    return state
}
export default rootReducer