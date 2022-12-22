


import React, { useEffect, useReducer } from 'react'

function Watch() {

    const initialState = {
        count: 0,
        isRunning: false
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'start': return { count: state.count, isRunning: true }
            //  case 'start' : return {...state, isRunning : true}
            case 'stop': return { count: state.count, isRunning: false }
            case 'reset': return { count: 0, isRunning: false }
            case 'step': return { count: state.count + 1, isRunning: true }

        }

    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        if (state.isRunning) {
            const timerId = setInterval(() => {
                dispatch({ type: 'step' })
            }, 1000)
            console.log(timerId);
            return () => {
                clearInterval(timerId);
            }
        }

    }, [state.isRunning])

    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={() => { dispatch({ type: 'start' }) }} className='btn btn-success'>Start</button>
            <button onClick={() => { dispatch({ type: 'stop' }) }} className='btn btn-danger'>Stop</button>
            <button onClick={() => { dispatch({ type: 'reset' }) }} className='btn btn-info'>Reset</button>
        </div>
    )
}

export default Watch