const createStore = (rootReducer, initialState) => { 
    let state = rootReducer(initialState, {type: "init"})
    const subscribers = [];

 return {
     dispatch(actionType){
        state = rootReducer(state, actionType)
        subscribers.forEach(callback => callback());
     },
     subscribe(callback){
       subscribers.push(callback)
     },
     getState() {
        return state
     }

 }
}
export default createStore