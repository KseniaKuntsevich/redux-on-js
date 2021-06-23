import './styles.css'
import rootReducer from './redux/rootReducer';
import createStore from './createStore';
import { DECREMENT, INCREMENT, THEME } from './redux/actionTypes';

const counter = document.getElementById('counter');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const theme = document.getElementById('theme');

const store =  createStore(rootReducer, {count: 0, theme: false})
store.subscribe(render)

add.addEventListener('click', ()=> {
  store.dispatch(INCREMENT)
})

sub.addEventListener('click', ()=> {
    store.dispatch(DECREMENT)
})

theme.addEventListener("click", () => {
  store.dispatch(THEME)
})

function render() {
    const { count, theme } = store.getState()
   counter.innerHTML = count
   document.body.className = theme ? "dark" : ""
}

render()