import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


//展示组件
const Timer = ({value,onIncrease,onDecrease}) => (
    <div>
        <h2>{value}</h2>
        <div>
            <button onClick = {onIncrease}> + </button>
            <button onClick = {onDecrease}> - </button>
        </div>
    </div>
)


//reducer function
const  reducer = (state = 0,action) => {
    switch(action.type){
        case 'INCREASE':
            return state + 1
        case 'DECREASE':
            return state - 1
        default:
            return state
    }
}


//create store
const store = createStore(reducer);


//监听函数
const Counter = () => {
    ReactDOM.render(
        <Timer onIncrease = {() => store.dispatch({type:'INCREASE'})} onDecrease = {() => store.dispatch({type:'DECREASE'})} value = {store.getState()}/>,
        document.getElementById('root')

    )
}


Counter();
store.subscribe(Counter)
