import './styles.css'

const counter = document.getElementById('counter');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const theme = document.getElementById('theme');

let state = {count: 0, theme: false}

const setState = (newState) =>{
  state = {...state, ...newState}
}



add.addEventListener('click', ()=> {
    setState({count: state.count + 1})
    render()
})

sub.addEventListener('click', ()=> {
    setState({count: state.count - 1})
    render()
})

theme.addEventListener("click", () => {
    setState({theme: !state.theme})
    render()
})

const render = () => {
  counter.innerHTML = state.count
  document.body.className = state.theme ? "dark" : "";
}

render()