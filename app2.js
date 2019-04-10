let initialState = {
    counter: 10,
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'INC':
            return Object.assign({}, state, { counter: state.counter + 1});
        case 'DEC':
            return Object.assign({}, state, { counter: state.counter - 1});
        default:
            return state
    }
}

const store = Redux.createStore(reducer, initialState);

document.querySelector('#inc').onclick = () =>
    store.dispatch({ type: 'INC'});
document.querySelector('#dec').onclick = () =>
    store.dispatch({ type: 'DEC'});

const updateView = () => {
    document.querySelector('#counter').innerHTML = store.getState().counter;
}

updateView()

store.subscribe(updateView)
