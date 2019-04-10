let state = {
    counter: 10,
}

document.querySelector('#inc').onclick = () =>
    dispatch('INC')
document.querySelector('#dec').onclick = () =>
    dispatch('DEC')

const updateView = () => {
    document.querySelector('#counter').innerHTML = state.counter;
}

updateView()

subscribe(updateView)

const reducer = (state, action) => {
    switch(action) {
        case 'INC':
            return Object.assign({}, state, { counter: state.counter + 1});
        case 'DEC':
            return Object.assign({}, state, { counter: state.counter - 1});
        default:
            return state
    }
}

const listeners = [];

function subscribe(callback) {
    listeners.add(callback)
}

const dispatch = (action) => {
    const newState = reducer(state, action);
    if (newState !== state) {
        state = newState;

        listeners.forEach(listener => listener());
    }
}
